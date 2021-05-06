// @flow
import React from "react";
import { useSettings } from "../SettingsProvider";

import LoginTypeDropdown from "../LoginTypeDropdown";
import TextInput from "components/TextInput";
import { Grid } from "@material-ui/core";

function PinSettings() {
  const {
    presenterPin,
    participantPin,
    moderatorPin,
    participantLoginType,
    setParticipantLoginType,
    presenterLoginType,
    moderatorLoginType,
    allowRaiseHand,
    setAllowRaiseHand,
    setPresenterLoginType,
    setModeratorLoginType,
    setPresenterPin,
    setParticipantPin,
    setModeratorPin
  } = useSettings();

  function handleAllowRaiseHandChange (e: any) {
    setAllowRaiseHand(e.target.checked);
  }

  return (
    <>
      <p>システムはすべての人にデフォルトのPINを設定します。ここに設定することで、あなたの希望のPINに変更することができます</p>
      <p>
        <strong>注：</strong>
        PINを変更しない場合は、空白のままにしてください
      </p>
      <Grid spacing={2} container>
        <Grid xs={4} item>
          <LoginTypeDropdown
            value={presenterLoginType}
            onChange={setPresenterLoginType}
          />
        </Grid>
        <Grid xs item>
          <TextInput 
            label="プレゼンター PIN"
            text={presenterPin}
            onChange={setPresenterPin}
            type="text"
            placeholder="新しいPINをここに入力してください"
            autoComplete="off"
          />
        </Grid>
      </Grid>
      
      <Grid spacing={2} container>
        <Grid xs={4} item>
          <LoginTypeDropdown
            value={moderatorLoginType}
            onChange={setModeratorLoginType}
          />
        </Grid>
        <Grid xs item>
          <TextInput 
            label="モデレーター PIN"
            text={moderatorPin}
            onChange={setModeratorPin}
            type="text"
            placeholder="新しいPINをここに入力してください"
            autoComplete="off"
          />
        </Grid>
      </Grid>

      <Grid spacing={2} container>
        <Grid xs={4} item>
          <LoginTypeDropdown
            value={participantLoginType}
            onChange={setParticipantLoginType}
          />
        </Grid>
        <Grid xs item>
          <TextInput 
            label="参加者 PIN"
            text={participantPin}
            onChange={setParticipantPin}
            type="text"
            placeholder="新しいPINをここに入力してください"
            autoComplete="off"
          />
          <div className="Vlt-checkbox">
            <label for="allow-raise-hand">
              <span class="Vlt-checkbox__button">
                <input
                  type="checkbox"
                  id="allow-raise-hand"
                  onChange={handleAllowRaiseHandChange}
                  checked={allowRaiseHand}
                />
                <span class="Vlt-checkbox__icon"></span>
              </span>
              参加者に”挙手”を許可する
            </label>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default PinSettings;
