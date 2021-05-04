import React from "react";
import posed from "react-pose";

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

function SpeakerButton(props){
  const { style, size, fontSize, hasAudio } = props;
  const [ isBig, setIsBig ] = React.useState(false);

  const styles = { 
    hangup: { 
      width: size, height: size, borderRadius: "50%", cursor: "pointer",
      fontSize: fontSize, display: "flex", alignItems: "center", justifyContent: "center"
    }
  }

  const Container = posed.div({
    big: { scale: 1.1 },
    small: { scale: 1 }
  });

  const handleMouseEnter = () => setIsBig(true);
  const handleMouseLeave = () => setIsBig(false);
  const handleClick = () => {
    if(props.onClick) props.onClick();
  }

  return (
    <Container 
      pose={isBig? "big": "small"} className={`${hasAudio? "Vlt-bg-green": "Vlt-bg-red"} Vlt-white`} style={{ ...styles.hangup, ...style }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      {hasAudio? <VolumeUpIcon fontSize="inherit"/>: <VolumeOffIcon fontSize="inherit"/>}
    </Container>
  )
}

SpeakerButton.defaultProps = { size: 50, fontSize: 24 }
export default SpeakerButton;