import useState from "react";
import React from "react";

import Question from "./question";
import AnswerButton from "./answerbutton";
import FetchData from "./fetchdata";
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
const QuestionTemplate = ({ question, correctAnswer, wrongAnswers }) => {
  // const handleAnswerClick = (selectedAnswer) => {
  //   console.log(`Selected answer: ${selectedAnswer}`);
  // };
  const randomizedArray = RandomizeArray(correctAnswer, wrongAnswers);

  return (
    <div>
      {/* Render the question */}
      <Question questionText={question} />

      {/* Render the answer buttons */}
      <div>
        <div className=" flex items-center justify-between">
          {randomizedArray.map((answer, key) => (
            <AnswerButton
              key={key} // Add a unique key prop here
              text={answer.text}
              isCorrectAnswer={answer.isCorrect}
              onClick={() => handleAnswerClick(answer)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionTemplate;
