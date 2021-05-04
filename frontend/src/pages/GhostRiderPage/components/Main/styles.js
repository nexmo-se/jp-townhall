// @flow
import { makeStyles } from "@material-ui/styles";
export default makeStyles(() => ({
  visible: { display: "inherit" },
  hidden: { display: "none !important" },
  container: { 
    width: "100%",
    flex: 1,
    overflow: "hidden",
    display: "flex", 
    flexDirection: "row" 
  },
  leftContainer: { 
    flexBasis: "75%",
    overflow: "hidden",
    flexDirection: "column",
    display: "flex",
    position: "relative" 
  },
  logoContainer: { 
    display: "flex", 
    flexDirection: "column", 
    position: "absolute", 
    top: 32, 
    right: 32, 
    zIndex: 2, 
    justifyContent: "center", 
    alignItems: "flex-end"
  },
  rightContainer: { 
    flex: 1, 
    borderLeft: "1px solid #e7ebee",
    display: "flex", 
    flexDirection: "column"
  },
  videoContainer: { 
    width: "100%", 
    height: "100%", 
    zIndex: 0,
    display: "flex",
    flexWrap: "wrap",
    "& div": {
      flexBasis: "50%",
      flexGrow: 1
    }
  },
  moderator: { 
    flex: 1, 
    borderBottom: "1px solid #e7ebee", 
    position: "relative" 
  },
  chatContainer: { 
    flex: 3, 
    display: "flex", 
    flexDirection: "column", 
    padding: 16, 
    overflowY: "scroll" 
  },
  smallVideoContainer: {
    height: "20%",
    width: "70%",
    position: "absolute",
    bottom: 0,
    "& div": {
      marginLeft: 8,
      marginRight: 8,
      height: "150px !important",
      width: "150px !important",
      overflow: "none",
      flexGrow: 0,
      flexBasis: "unset"
    },
    "& div > .OT_bar": { display: "none" },
    "& div > .OT_name": { display: "none" }
  }
}))