"use client";
import React, { useState, useEffect } from "react";
import AnswerButton from "./answerbutton";

const FetchData = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [count, setCount] = useState(0); // To track the current question

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json.results); // Store only the questions
        setDataIsLoaded(true);
      });
  }, []);

  // Function to go to the next question
  const handleNextQuestion = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count
  };

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time...</h1>
      </div>
    );
  }

  // Get the current question and answers
  const currentQuestion = items[count];
  const answers = [
    { text: currentQuestion.correct_answer, isCorrect: true },
    ...currentQuestion.incorrect_answers.map((answer) => ({
      text: answer,
      isCorrect: false,
    })),
  ].sort(() => Math.random() - 0.5); // Randomize answers

  return (
    <div className="App">
      <div className="container">
        <h2>Question {count + 1}</h2>
        <p>{currentQuestion.question}</p>
        <div className="flex justify-between items-center ">
          {answers.map((answer, index) => (
            <AnswerButton
              key={index}
              text={answer.text}
              isCorrectAnswer={answer.isCorrect}
              onClick={handleNextQuestion} // Pass the function to increment count
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
