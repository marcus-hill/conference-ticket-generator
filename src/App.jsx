import { useState } from "react";
import logoFull from "./assets/logo-full.svg";
import patternCircle from "./assets/pattern-circle.svg";
import patternLines from "./assets/pattern-lines.svg";
import patternSquigglyLineBottom from "./assets/pattern-squiggly-line-bottom.svg";
import patternSquigglyLineTop from "./assets/pattern-squiggly-line-top.svg";
import TicketInput from "./components/TicketInput/TicketInput.jsx";
import "./index.css";
import "./App.css";

function App() {
  const [showingTicketInput, setShowingTicketInput] = useState(true);

  return (
    <>
      <div className="conference-generator-container">
        <img src={patternSquigglyLineTop} className="patternSquigglyLineTop" />

        <div className="conference-container">
          <div className="logo">
            <img src={logoFull} />
          </div>
          {showingTicketInput && <TicketInput></TicketInput>}
        </div>

        <img src={patternSquigglyLineBottom} className="patternSquigglyLineBottom" />
      </div>
    </>
  );
}

export default App;
