import React from "react";

import Question from "./question";
import AnswerButton from "./answerbutton";
const RandomizeArray = (correctAnswer, wrongAnswers) => {
  // Create an array of objects with text and boolean
  const result = [
    { text: correctAnswer, isCorrect: true }, // Correct answer
    ...wrongAnswers.map((answer) => ({ text: answer, isCorrect: false })), // Wrong answers
  ];

  // Randomize the order of the array
  const randomizedResult = result.sort(() => Math.random() - 0.5);

  return randomizedResult;
};
const QuestionTemplate = ({
  count,
  question,
  correctAnswer,
  wrongAnswers,
  handleAnswerClick,
  incrementCorrectAmount
}) => {
  const randomizedArray = RandomizeArray(correctAnswer, wrongAnswers);

  return (
    <div className=" flex flex-col items-center justify-between">
      <h2 className=" uppercase bg-[#D0E5D9] rounded font-bold text-[#010101] p-2 text-center">Question {count + 1}</h2>
      <div className=" flex items-center justify-between">
        <Question questionText={question} />
      </div>

      <div>
        <div className=" flex flex-col items-center justify-between">
          {randomizedArray.map((answer, key) => (
            <AnswerButton
              key={key} // Add a unique key prop here
              text={answer.text}
              isCorrectAnswer={answer.isCorrect}
              onClick={() => handleAnswerClick()}
              increaseCorrectAmount={incrementCorrectAmount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionTemplate;
