// @flow
import React from "react";
import { useParams } from "react-router-dom";

import SettingsModal from "../SettingsModal";
import SettingsProvider from "../SettingsProvider";
import Button from "components/Button";

interface IParams {
  tenant: string;
}

function SettingsPanel(){
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const { tenant } = useParams<IParams>();

  function toggleOpen(){
    setModalOpen((prev) => !prev)
  }

  return (
    <SettingsProvider tenant={tenant}>
      <p>必要に応じて、以下の項目に移動します。:</p>
      <ul className="Vlt-list Vlt-list--simple">
        <li>質問をクリア</li>
        <li>議決投票をクリア</li>
        <li>セッションをクリア</li>
        <li>PINを変更</li>
        <li>タブ項目設定</li>
      </ul>
      <Button 
        text="すべての設定を表示" 
        onClick={toggleOpen}
      />
      <SettingsModal 
        onClose={toggleOpen}
        open={modalOpen}
      />
    </SettingsProvider>
  )
}
export default SettingsPanel;