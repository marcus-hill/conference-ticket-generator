import { useState } from "react";
import classes from "./ticketinput.module.css";
import StandardInputBox from "../StandardInputBox/StandardInputBox";

const TicketInput = () => {
  const [fullName, setFullName] = useState();

  return (
    <>
      <div className={classes.ticketInput}>
        <h1 className={classes.ticketInputHeader}>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className={classes.ticketInputDescription}>Secure your spot at next year's biggest coding conference.</p>
      </div>

      <StandardInputBox inputTitle="First Name" returnInput={setFullName} preview="Jonatan Kristof" valid={true} invalidMessage="Please enter your first name." />
      <StandardInputBox inputTitle="Email Address" returnInput={setFullName} preview="jonatan@gmail.com" valid={true} invalidMessage="Please enter your email address." />
      <StandardInputBox inputTitle="GitHub Username" returnInput={setFullName} preview="@jonatankristof0101" valid={true} invalidMessage="Please enter your GitHub Username." />
    </>
  );
};

export default TicketInput;
