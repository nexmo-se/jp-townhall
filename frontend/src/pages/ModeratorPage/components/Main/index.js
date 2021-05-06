// @flow
import React from "react";
import CredentialAPI from "api/credential";
import clsx from "clsx";

import useSession from "hooks/session";
import useStyles from "./styles";
import useMe from "hooks/me";
import usePublisher from "hooks/publisher";
import { useParams } from "react-router-dom";

import LiveParticipantList from "../LiveParticipantList";
import ModeratorParticipantItem from "../ModeratorParticipantItem";
import RaisedHandList from "../RaisedHandList";
import ModeratorMessageTab from "../ModeratorMessageTab";
import MainScreen from "../MainScreen";
import FullPageLoading from "components/FullPageLoading";
// import LiveBadge from "components/LiveBadge";
import ParticipantList from "components/ParticipantList";

interface URLParamters { tenant: string }

function Main () {
  const [publishFailed, setPublishFailed] = React.useState<boolean>(false);
  const { me, loggedIn } = useMe();
  const { session, connected, connections, connectWithCredential } = useSession();
  const { publish: publishCamera, publisher: cameraPublisher } = usePublisher({ containerID: "cameraContainer" });
  const { tenant } = useParams<URLParamters>();
  const mStyles = useStyles();

  const publishErrorListener = React.useCallback(
    (error: any) => {
      setPublishFailed(true);
      alert("カメラに3回アクセスしようとしましたが、失敗しました。カメラへのアクセスを許可し、他のアプリケーションがカメラを使用していないことを確認してください。ページを更新して再試行できます");
    },
    []
  )

  React.useEffect(
    () => {
      async function connect () {
        if (loggedIn && me) {
          const credential = await CredentialAPI.generateCredential({
            role: "moderator",
            data: me.toJSON(),
            tenant
          });
          await connectWithCredential(credential);
        }
      }
      connect();
    }, 
    [loggedIn, me, connectWithCredential, tenant]
  );

  React.useEffect(
      () => {
      if (connected && session && me && !publishFailed) {
        publishCamera({
          session,
          user: me,
          onError: publishErrorListener
        });
        setPublishFailed(false);
      }
    },
    [publishFailed, connected, session, me, publishCamera, publishErrorListener]
  )

  return (
    <>
      {!connected && <FullPageLoading />}
      <div className={mStyles.container}>
        <div className={mStyles.leftPanel}>
          <div className={mStyles.chat} style={{ 
              borderBottom: "1px solid #e7ebee",
              flexBasis: "30%"
            }}
          >
            <h4 className="Vlt-center">挙手</h4>
            <RaisedHandList />
          </div>
          <div className={mStyles.chat} style={{ 
              flexBasis: "70%",
              paddingLeft: 32, 
              paddingRight: 32, 
              paddingTop: 32 
            }}
          >
            <ModeratorMessageTab />
          </div>
        </div>
        <div className={mStyles.centerPanel}>
          <div className={mStyles.chat} style={{ flexBasis: "50%", borderBottom: "1px solid #e7ebee" }}>
            <h4 className="Vlt-center">ライブ参加者</h4>
            <LiveParticipantList>
              {(me)? (
                <>
                  <ModeratorParticipantItem 
                    user={me}
                    publisher={cameraPublisher}
                  />
                </>
              ): null}
            </LiveParticipantList> 
          </div>
          <div className={mStyles.chat} style={{ flexBasis: "50%", paddingTop: 32 }}>
            <h4 className="Vlt-center">参加者 ({connections.length})</h4>
            <ParticipantList />
          </div>
        </div>
        <div className={clsx(
          mStyles.rightPanel,
          mStyles.black
        )}>
          <MainScreen />
          {/* <LiveBadge className={mStyles.liveBadge} /> */}
        </div>
      </div>
    </>
  )
}
export default Main;