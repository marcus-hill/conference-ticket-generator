import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import InfoIconError from "../../assets/icon-info-error.svg?react";
import InfoIcon from "../../assets/icon-info.svg?react";
import classes from "./invalidmessage.module.css";

const InvalidMessage = ({ validMessage, invalidMessage, valid }) => {
  return valid && validMessage ? (
    <div className={classes.helpText}>
      <InfoIcon /> {validMessage}
    </div>
  ) : !valid ? (
    <div className={classes.invalidText}>
      <InfoIconError /> {invalidMessage}
    </div>
  ) : (
    <></>
  );
};

export default InvalidMessage;
