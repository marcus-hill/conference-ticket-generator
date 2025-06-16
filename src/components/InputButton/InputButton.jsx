import classes from "./inputbutton.module.css";

const InputButton = ({ id, buttonText, onClickHandler }) => {
  return (
    <>
      <button id={id} onClick={onClickHandler} className={classes.inputButton}>
        {buttonText}
      </button>
    </>
  );
};

export default InputButton;
