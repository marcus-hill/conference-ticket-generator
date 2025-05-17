import classes from "./standardinputbox.module.css";

const StandardInputBox = ({ inputId, inputTitle, preview, valid, invalidMessage, returnInput }) => {
  const handleReturnInput = (input) => {
    console.log({ inputTitle } + " : " + input.target.value);
    returnInput(input.target.value);
  };
  return (
    <>
      <div className={classes.inputBox}>
        <label id={inputId} className={classes.inputLabel}>
          {inputTitle}
        </label>
        <input className={classes.inputHtml} htmlFor={inputTitle} placeholder={preview} onChange={(e) => handleReturnInput(e)}></input>
      </div>
    </>
  );
};

export default StandardInputBox;
