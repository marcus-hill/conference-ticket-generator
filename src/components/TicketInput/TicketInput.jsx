import { useState, useRef, useCallback } from "react";
import classes from "./ticketinput.module.css";
import StandardInputBox from "../StandardInputBox/StandardInputBox";
import FileUploadBox from "../FileUploadBox/FileUploadBox";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import TicketOutline from "../../assets/pattern-ticket.svg?react";
import TicketLogo from "../../assets/logo-mark.svg?react";
import GitHubLogo from "../../assets/icon-github.svg?react";
import ImageAvatar from "../../assets/image-avatar.jpg";

const TicketInput = () => {
  const [fullName, setFullName] = useState();
  const [fullNameValid, setFullNameValid] = useState(true);

  const [emailAddress, setEmailAddress] = useState();
  const [emailValid, setEmailValid] = useState(true);

  const [gitUsername, setGitUsername] = useState();
  const [gitValid, setGitValid] = useState(true);

  const [avatarValid, setAvatarValid] = useState(true);
  const [avatarUploaded, setAvatarUploaded] = useState(false);
  const fileInput = useRef(); /* create a ref*/

  const [showingTicket, setShowingTicket] = useState(false);

  const handleFileSubmit = (e) => {
    e.preventDefault();

    if (fileInput.current.files[0] !== undefined) {
      const fileSize = fileInput.current.files[0].size;

      if (fileSize / 1024 > 500) {
        setAvatarValid(false);
        setAvatarUploaded(false);
      } else {
        setAvatarValid(true);
        setAvatarUploaded(true);
      }
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    fileInput.current?.click();
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    setAvatarUploaded(false);
    setAvatarValid(true);
  };

  const validateFullName = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
    setFullNameValid(true);
  };

  const validateEmailAddress = (e) => {
    console.log(e.target.value);
    setEmailAddress(e.target.value);
    setEmailValid(true);
  };

  const validateGitUsername = (e) => {
    console.log(e.target.value);
    setGitUsername(e.target.value);
    setGitValid(true);
  };

  const checkValidations = () => {
    let allValid = true;

    if (fullName === null || fullName === undefined || fullName === "") {
      setFullNameValid(false);
      allValid = false;
    }
    if (emailAddress === null || emailAddress === undefined || emailAddress === "") {
      setEmailValid(false);
      allValid = false;
    } else if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
      setEmailValid(false);
      allValid = false;
    }

    if (gitUsername === null || gitUsername === undefined || gitUsername === "") {
      setGitValid(false);
      allValid = false;
    }
    if (avatarUploaded === false) {
      setAvatarValid(false);
      allValid = false;
    }
    return allValid;
  };

  const generateTicket = (e) => {
    if (checkValidations()) {
      console.log("showing ticket now...");
      setShowingTicket(true);
    }
  };

  return (
    <>
      <div className={classes.ticketInput}>
        (
        {showingTicket ? (
          <h1 className={classes.ticketInputHeader}>
            Congratulations, <span className={classes.ticketFullName}>{fullName}</span>! Your ticket is ready.
          </h1>
        ) : (
          <h1 className={classes.ticketInputHeader}>Your Journey to Coding Conf 2025 Starts Here!</h1>
        )}
        )(
        {showingTicket ? (
          <p className={classes.ticketInputDescription}>
            We've emailed your ticket to <span className={classes.ticketEmail}>{emailAddress}</span> and will send updates in the run up to the event.
          </p>
        ) : (
          <p className={classes.ticketInputDescription}>Secure your spot at next year's biggest coding conference.</p>
        )}
        )
      </div>

      {!showingTicket && <FileUploadBox inputId="file-upload" inputTitle="Upload Avatar" previewMessage="Drag and drop or click to upload" helpText="Upload your photo (JPG or PNG, max size: 500KB)" handleRemoveFile={handleRemoveFile} handleFileChange={handleFileChange} valid={avatarValid} invalidMessage="File too large. Please upload a photo under 500KB." uploaded={avatarUploaded} handleFileSubmit={handleFileSubmit} fileInput={fileInput} />}

      {!showingTicket && <StandardInputBox inputId="full-name" inputTitle="Full Name" validation={validateFullName} preview="Jonatan Kristof" valid={fullNameValid} invalidMessage="Please enter your full name." />}

      {!showingTicket && <StandardInputBox inputId="email-address" inputTitle="Email Address" validation={validateEmailAddress} preview="jonatan@gmail.com" valid={emailValid} invalidMessage="Please enter your email address." />}

      {!showingTicket && <StandardInputBox inputId="github-username" inputTitle="GitHub Username" validation={validateGitUsername} preview="@jonatankristof0101" valid={gitValid} invalidMessage="Please enter your GitHub Username." />}

      {!showingTicket && (
        <button className={classes.generateTicketButton} onClick={generateTicket}>
          Generate My Ticket
        </button>
      )}

      {showingTicket && (
        <div className={classes.ticketOutlineDiv}>
          <TicketOutline className={classes.ticketOutline}></TicketOutline>

          <div className={classes.ticketLogoContainer}>
            <TicketLogo className={classes.ticketLogo}></TicketLogo>
          </div>
          <div className={classes.ticketTitleContainer}>
            <p className={classes.ticketTitle}>Coding Conf</p>
            <p className={classes.ticketDescription}>Jan 31, 2025 / Austin, TX</p>
          </div>

          <div className={classes.ticketAvatarContainer}>
            <img src={ImageAvatar} className={classes.ticketAvatar} />
          </div>

          <div className={classes.ticketHolderContainer}>
            <p className={classes.ticketHolderName}>{fullName}</p>
            <div className={classes.gitHubContainer}>
              <GitHubLogo className={classes.gitHubLogo} />
              <p className={classes.gitHubUsername}>@{gitUsername}</p>
            </div>
          </div>

          <div className={classes.ticketNumberContainer}>
            <p className={classes.ticketNumber}>#01609</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketInput;
