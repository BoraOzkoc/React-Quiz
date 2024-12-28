"use client";
import React from "react";
import Question from "./question"; // Import Question component
import QuizTemplate from "./quiztemplate";

function decodeHtmlEntities(str) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

class FetchData extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [], // Holds the fetched questions
      DataisLoaded: false, // Tracks if the data is loaded
      count: 0, // Tracks the current question index
    };
  }

  // Fetch the questions when the component mounts
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.results, // Store the array of questions in `items`
          DataisLoaded: true,
        });
      });
  }

  // Render method
  render() {
    const { DataisLoaded, items, count } = this.state;

    if (!DataisLoaded) {
      return (
        <div>
          <h1>Please wait... Loading questions...</h1>
        </div>
      );
    }

    // Get the current question data
    const currentQuestion = items[count];
    const questionText = decodeHtmlEntities(currentQuestion.question); // Question string
    const correctAnswer = currentQuestion.correct_answer;
    const incorrectAnswers = currentQuestion.incorrect_answers;

    return (
      <div className="App">
        <div className="container">
          <h2>Question {count + 1}</h2>
          {/* Use Question component to display the question text */}
          {/* <Question questionText={questionText} />
          -----
          {correctAnswer}
          -----
          {incorrectAnswers[0]}
          -----
          {incorrectAnswers[1]}
          -----
          {incorrectAnswers[2]}
          ----- */}
          {/* Use QuestionTemplate component to display the answers */}
          <QuizTemplate question={questionText} correctAnswer={correctAnswer} wrongAnswers={incorrectAnswers}
          // Replace with your answer handling logic
          />
        </div>
      </div>
    );
  }
}

export default FetchData;
