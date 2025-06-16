import classes from "./standardinputbox.module.css";
import InvalidMessage from "../InvalidMessage/InvalidMessage";

const StandardInputBox = ({ inputId, inputTitle, preview, valid, invalidMessage, validation }) => {
  return (
    <>
      <div className={classes.inputBox}>
        <label id={inputId} className={classes.inputLabel}>
          {inputTitle}
        </label>
        <input className={classes.inputHtml} htmlFor={inputTitle} placeholder={preview} onChange={validation}></input>
        <InvalidMessage invalidMessage={invalidMessage} valid={valid} />
      </div>
    </>
  );
};

export default StandardInputBox;
