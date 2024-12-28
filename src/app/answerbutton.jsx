import React, { useState } from "react";

const AnswerButton = ({ text, isCorrectAnswer}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true); // Disable the button
    if (onClick) {
      if (isCorrectAnswer) {
        console.log("correct answer");
      }
    }
  };

  return (
    <div className="border">
      <button onClick={handleClick} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
};

export default AnswerButton;
