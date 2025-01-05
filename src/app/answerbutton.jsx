import React, { useState } from "react";
import he from "he"
const AnswerButton = ({
  text,
  isCorrectAnswer,
  onClick,
  increaseCorrectAmount,
}) => {
  const handleClick = () => {
    if (isCorrectAnswer) {
      increaseCorrectAmount();
    } else {
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 m-2 min-w-[320px] rounded bg-[#46A57D] hover:bg-[#2c6950] text-white"
      `}
    >
      {he.decode(text)}
    </button>
  );
};

export default AnswerButton;
