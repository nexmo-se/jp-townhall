import React from "react";

import useStyles from "./styles";
import { useSettings } from "../SettingsProvider";

import Checkbox from "components/Checkbox";

function TabsSettings() {
  const {
    participantsTab,
    questionsTab,
    chatTab,
    pollingTab,
    setParticipantsTab,
    setQuestionsTab,
    setChatTab,
    setPollingTab
  } = useSettings();
  const mStyles = useStyles(); 

  return (
    <>
      <p>
        <strong>タブ設定: </strong> &nbsp;
        ここでタブを設定できます。これはすべての役割に影響します
      </p>

      <div className={mStyles.tabs}>
        <div>
          <Checkbox 
            value="participants"
            label="参加者"
            checked={participantsTab}
            onChange={setParticipantsTab}
          />
          <Checkbox 
            value="chats"
            label="チャット"
            checked={chatTab}
            onChange={setChatTab} 
          />
        </div>
        <div>
          <Checkbox 
            value="questions"
            label="質問"
            checked={questionsTab}
            onChange={setQuestionsTab}
          />
          <Checkbox 
            value="polling"
            label="議決投票"
            checked={pollingTab} 
            onChange={setPollingTab}
          />
        </div>
      </div>
    </>
  )
}

export default TabsSettings;
