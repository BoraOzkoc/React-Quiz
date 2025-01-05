"use client";
import React, { useState, useEffect } from "react";
import QuizTemplate from "./quiztemplate";
import Results from "./results";
import getQuestions from "./getQuestions";
import EntryPage from "./entrypage";
const FetchData = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [count, setCount] = useState(0); // To track the current question
  const [correctAmount, setCorrectAmount] = useState(0);
  const [isFirstPage, setPage] = useState(true);
  useEffect(() => {
    fetchQuestions();
    setPage(true);
  }, []);

  async function fetchQuestions() {
    setDataIsLoaded(false);
    let results = await getQuestions();

    setItems(results); // Store only the questions
    setDataIsLoaded(true);
  }

  // Function to go to the next question
  const handleNextQuestion = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const resetQuiz = () => {
    setCount(0);
    setCorrectAmount(0);
    fetchQuestions();
    setPage(true);
  };
  const incrementCorrectAmount = () => {
    setCorrectAmount((prevCount) => (prevCount += 1));
  };
  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time...</h1>
      </div>
    );
  }
const nextpage=() =>{
    setPage(false);
}
  // Get the current question and answers
  const currentQuestion = items[count];

  return (
    <div className="App">
      <div className="container ">
        <div>
          {isFirstPage ? (
            <EntryPage onClick={nextpage} />
          ) : count <= 9 ? (
            <QuizTemplate
              count={count}
              question={currentQuestion.question}
              correctAnswer={currentQuestion.correct_answer}
              wrongAnswers={currentQuestion.incorrect_answers}
              handleAnswerClick={handleNextQuestion}
              incrementCorrectAmount={incrementCorrectAmount}
            />
          ) : (
            <Results correctNumber={correctAmount} handleClick={resetQuiz} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
