// @flow
import React from "react";

import PollingModal from "../PollingModal";
import Button from "components/Button";

function CreatePoll(){
  const [ modalOpen, setModalOpen ] = React.useState<boolean>(false);
  
  function toggleCreateModal(){
    setModalOpen((prev) => !prev);
  }

  return (
    <>
      <Button text="議決投票項目作成" onClick={toggleCreateModal} />
      <PollingModal open={modalOpen} onClose={toggleCreateModal} />
    </>
  )
}
export default CreatePoll;