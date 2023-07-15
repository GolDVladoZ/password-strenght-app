import { useState, useEffect } from "react";
import "./styles.scss";

interface indicatorsInterface {
  strengthChecks: {
    length: number;
    hasLength: boolean;
    hasLetters: boolean;
    hasDigit: boolean;
    hasSpecialChar: boolean;
  };
}

const Indicators = ({ strengthChecks }: indicatorsInterface) => {
  const [strength, setStrength] = useState<string>("");

  useEffect(() => {
    const getStrength = () => {
      const isWeak =
        strengthChecks.hasLength === false && strengthChecks.length > 0;
      const isMedium =
        strengthChecks.hasLength &&
        ((strengthChecks.hasLetters && strengthChecks.hasDigit) ||
          (strengthChecks.hasDigit && strengthChecks.hasSpecialChar) ||
          (strengthChecks.hasLetters && strengthChecks.hasSpecialChar));
      const isHard =
        strengthChecks.hasLength &&
        strengthChecks.hasLetters &&
        strengthChecks.hasDigit &&
        strengthChecks.hasSpecialChar;

      if (isHard === true) {
        setStrength("hard");
      } else if (isMedium === true) {
        setStrength("medium");
      } else if (strengthChecks.hasLength === true) {
        setStrength("easy");
      } else if (isWeak) {
        setStrength("weak");
      } else {
        setStrength("");
      }
    };

    getStrength();
  }, [strengthChecks]);

  return (
    <div className={`indicators ${strength}`}>
      <div className="segment"></div>
      <div className="segment"></div>
      <div className="segment"></div>
    </div>
  );
};

export default Indicators;
