// @flow
import React from "react";

import useStyles from "./styles";
import useMessage from "hooks/message";

import User from "entities/user";
import Message from "entities/message";

import TextInput from "components/TextInput";
import Button from "components/Button";

interface IChatInput{
  user: User,
  byPass?: boolean
}

function ChatInput({ user, byPass = true }: IChatInput){
  const [ text, setText ] = React.useState<string>("");
  const mStyles = useStyles();
  const mMessage = useMessage();

  function handleClick(e){
    if(e) e.preventDefault();
    const isApproved = (byPass)? true: false;
    const message = new Message(user, text, isApproved);
    mMessage.send({ message });
    setText("");
  }

  return (
    <form className={mStyles.root} onSubmit={handleClick}>
      <TextInput 
        placeholder="ここに入力してください"
        text={text} 
        onChange={setText} 
        className={mStyles.input}

      />
      <Button
        type="submit" 
        text="送信" 
        onClick={handleClick} 
        className={mStyles.button}
      />
    </form>
  )
}
export default ChatInput;