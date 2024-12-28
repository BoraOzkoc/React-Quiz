import React, { useState } from "react";

const AnswerButton = ({ text, isCorrectAnswer, onClick }) => {
  const handleClick = () => {
    if (isCorrectAnswer) {
      console.log("Correct answer");
    }
    onClick(); // Call the passed function to go to the next question
  };

  return (
    <div className="border">
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default AnswerButton;
