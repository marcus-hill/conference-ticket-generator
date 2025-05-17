import classes from "./fileuploadbox.module.css";
// import { default as InfoIcon } from "../../assets/icon-info.svg";
import { default as UploadIcon } from "../../assets/icon-upload.svg";
import InfoIcon from "../../assets/icon-info.svg?react";
import InfoIconError from "../../assets/icon-info-error.svg?react";

const FileUploadBox = ({ inputId, inputTitle, previewMessage, uploadIcon, helpText, valid, invalidMessage, uploaded, uploadedImagePath, returnInput }) => {
  const handleReturnInput = (input) => {
    returnInput(input.target.files[0]);
  };

  return (
    <>
      <div className={classes.inputBox}>
        <p className={classes.inputLabel}>{inputTitle}</p>
        <label htmlFor={inputId} id={inputId + "-label"} className={classes.mainInputLabel}>
          <div className={classes.uploadIcon}>
            <img src={UploadIcon} />
          </div>
          {previewMessage}
        </label>
        <input className={classes.originalInput} id={inputId} type="file" accept="image/png, image/jpeg" onChange={(e) => handleReturnInput(e)}></input>
        {valid ? (
          <div className={classes.helpText}>
            <InfoIcon /> {helpText}
          </div>
        ) : (
          <div className={classes.invalidText}>
            <InfoIconError /> {invalidMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default FileUploadBox;
