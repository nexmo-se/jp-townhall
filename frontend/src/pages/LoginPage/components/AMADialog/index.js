// @flow
import React from "react";
import clsx from "clsx";
import validator from "validator";
import AMAAPI from "api/ama";

import useStyles from "./styles";
import { useParams } from "react-router-dom";

import User from "entities/user";
import Participant from "entities/participant";
import type { Role } from "entities/user";

import TextInput from "components/TextInput";

interface AMADialogProps { 
  onLoggedIn: (user: User) => Promise<void>,
  role: Role
}

interface IParams {
  tenant: string;
}

function AMADialog({ onLoggedIn, role }: AMADialogProps){
  const [ firstName, setFirstName ] = React.useState<string>("");
  const [ lastName, setLastName ] = React.useState<string>("");
  const [ email, setEmail ] = React.useState<string>("");
  const [ companyName, setCompanyName ] = React.useState<string>("");
  const { tenant } = useParams<IParams>();
  const mStyles = useStyles();

  async function handleSubmit(e){
    e.preventDefault();
    const checker = {
      fistName: !validator.isEmpty(firstName),
      lastName: !validator.isEmpty(lastName),
      email: validator.isEmail(email),
      companyName: !validator.isEmpty(companyName)
    }
    const valid = Object.keys(checker).map((key) => checker[key]);
    const isValid = !valid.includes(false);
    if(isValid){
      const participant = new Participant({
        firstName, lastName, email, companyName
      })
      await AMAAPI.create({ tenant, participant });
      const user = new User({ name: `${firstName} ${lastName}`, role })
      onLoggedIn(user);
    }else alert("Please fill all details");
  }

  return (
    <form className={mStyles.root} onSubmit={handleSubmit}>
      <div 
        className={clsx(
          "Vlt-card",
          "Vlt-bg-white",
          mStyles.card
        )}
      >
        <div className="Vlt-card__header">
          <h3>あなたの詳細情報を入力してください</h3>
          <p>ご質問にお答えできなかった場合に備えて、後日ご連絡いたします</p>
        </div>
        <div className="Vlt-card__content">
          <TextInput text={firstName} onChange={setFirstName} placeholder="名前を入力してください"/>
          <TextInput text={lastName} onChange={setLastName} placeholder="姓を入力してください"/>
          <TextInput text={email} onChange={setEmail} placeholder="E-mailアドレスを入力してください"/>
          <TextInput text={companyName} onChange={setCompanyName} placeholder="会社名を入力してください"/>
        </div>
        <div 
          className={clsx(
            "Vlt-card__footer",
            "Vlt-card__footer--noborder",
            mStyles.footer
          )}
        >
          <small>このアプリは、ブラウザとしてChromeを使用するのが最適です</small> <br /> <br />
          <button type="submit" className="Vlt-btn Vlt-btn--primary Vlt-btn--app" onClick={handleSubmit}>参加</button>
        </div>
      </div>
    </form>
  )
}
export default AMADialog;