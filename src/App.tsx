import { useState, useEffect } from "react";
import Indicators from "./components/Indicators";

import "./styles/app.scss";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [strengthChecks, setChecks] = useState({
    length: 0,
    hasLength: false,
    hasLetters: false,
    hasDigit: false,
    hasSpecialChar: false,
  });

  useEffect(() => {
    setChecks({
      length: input.length,
      hasLength: input.length >= 8,
      hasLetters: /[A-Za-z]+/.test(input),
      hasDigit: /\d/.test(input),
      hasSpecialChar: /[^A-Za-z0-9]+/.test(input),
    });
  }, [input]);

  return (
    <div className="container">
      <div className="content">
        <input onChange={(event) => setInput(event.target.value)} />
        <Indicators strengthChecks={strengthChecks} />
        <div className="checks">
          <span className={`check ${strengthChecks.hasLength ? "active" : ""}`}>
            Has more than 8 characters
          </span>
          <span
            className={`check ${strengthChecks.hasLetters ? "active" : ""}`}
          >
            Has letters
          </span>
          <span className={`check ${strengthChecks.hasDigit ? "active" : ""}`}>
            Has numbers
          </span>
          <span
            className={`check ${strengthChecks.hasSpecialChar ? "active" : ""}`}
          >
            Has symbols
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
