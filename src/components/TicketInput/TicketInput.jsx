import { useState } from "react";
import classes from "./ticketinput.module.css";
import StandardInputBox from "../StandardInputBox/StandardInputBox";
import FileUploadBox from "../FileUploadBox/FileUploadBox";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const TicketInput = () => {
  const [fullName, setFullName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [gitUsername, setGitUsername] = useState();

  const [avatarValid, setAvatarValid] = useState(true);
  const [avatar, setAvatarFile] = useState();

  return (
    <>
      <div className={classes.ticketInput}>
        <h1 className={classes.ticketInputHeader}>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className={classes.ticketInputDescription}>Secure your spot at next year's biggest coding conference.</p>
      </div>
      <FileUploadBox inputId="file-upload" inputTitle="Upload Avatar" previewMessage="Drag and drop or click to upload" helpText="Upload your photo (JPG or PNG, max size: 500KB)" valid={avatarValid} invalidMessage="File too large. Please upload a photo under 500KB." uploaded={false} uploadedImagePath={""} returnInput={setAvatarFile} />

      <StandardInputBox inputId="full-name" inputTitle="Full Name" returnInput={setFullName} preview="Jonatan Kristof" valid={true} invalidMessage="Please enter your full name." />
      <StandardInputBox inputId="email-address" inputTitle="Email Address" returnInput={setEmailAddress} preview="jonatan@gmail.com" valid={true} invalidMessage="Please enter your email address." />
      <StandardInputBox inputId="github-username" inputTitle="GitHub Username" returnInput={setGitUsername} preview="@jonatankristof0101" valid={true} invalidMessage="Please enter your GitHub Username." />
    </>
  );
};

export default TicketInput;
