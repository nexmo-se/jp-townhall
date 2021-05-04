// @flow
import React from "react";

import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ControlButton from "components/ControlButton";

interface IVideoButton {
  size?: number,
  fontSize?: number,
  hasVideo: boolean,
  loading?: boolean,
  onClick?: Function
}

function VideoButton({ hasVideo, ...props }: IVideoButton) {
  return (
    <ControlButton 
      {...props}
      active={hasVideo}
    >
      {hasVideo? <VideocamIcon fontSize="inherit"/>: <VideocamOffIcon fontSize="inherit"/>}
    </ControlButton>
  )
}

VideoButton.defaultProps = { size: 50, fontSize: 24 }
export default VideoButton;