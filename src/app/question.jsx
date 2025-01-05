import React from "react";
import he from "he"

const Question = ({ questionText }) => {
  return (
    <div className="underline underline-offset-2 p-6 font-bold w-full flex items-center justify-center">
      <h2 className="italic text-center">{he.decode(questionText)}</h2>
    </div>
  );
};

export default Question;
