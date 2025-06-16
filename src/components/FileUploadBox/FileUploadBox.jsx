import classes from "./fileuploadbox.module.css";
// import { default as InfoIcon } from "../../assets/icon-info.svg";
import { default as UploadIcon } from "../../assets/icon-upload.svg";
import ImageAvatar from "../../assets/image-avatar.jpg?react";

import InputButton from "../InputButton/InputButton";
import { useRef } from "react";
import InvalidMessage from "../InvalidMessage/InvalidMessage";

const FileUploadBox = ({ inputId, inputTitle, previewMessage, uploadIcon, helpText, handleFileChange, handleRemoveFile, valid, invalidMessage, uploaded, uploadedImagePath, handleFileSubmit, fileInput }) => {
  return (
    <>
      <div className={classes.inputBox}>
        <p className={classes.inputLabel}>{inputTitle}</p>
        <label htmlFor={inputId} id={inputId + "-label"} className={classes.mainInputLabel}>
          <div className={classes.uploadIcon}>{uploaded ? <img src={ImageAvatar} className={classes.uploadedIcon} /> : <img src={UploadIcon} />}</div>
          {uploaded ? (
            <div className={classes.uploadedButtons}>
              <InputButton id="remove-image" buttonText="Remove image" onClickHandler={handleRemoveFile} />
              <InputButton id="change-image" buttonText="Change image" onClickHandler={handleFileChange} />
            </div>
          ) : (
            <p>{previewMessage}</p>
          )}
          <input className={classes.originalInput} id={inputId} type="file" ref={fileInput} accept="image/png, image/jpeg" onChange={handleFileSubmit}></input>
        </label>

        <InvalidMessage validMessage={helpText} invalidMessage={invalidMessage} valid={valid} />
      </div>
    </>
  );
};

export default FileUploadBox;
