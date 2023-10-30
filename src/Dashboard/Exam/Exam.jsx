import React, { useState, useEffect } from "react";
import ExamFormate from "./ExamFormate";

const Exam = () => {
  const [questinData, setQuestionData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelected = (questionNumber, selectedAnswer) => {
    // Update the selectedAnswers state with the chosen answer for the specified question
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedAnswer,
    }));
  };

  const handleSubmitQuiz = () => {
    // Here, you can submit the selectedAnswers to your database or perform other actions
    console.log("Selected Answers:", selectedAnswers);
  };

  useEffect(() => {
    fetch('/question.json')
      .then((res) => res.json())
      .then((data) => {
        setQuestionData(data);
      });
  }, []);

  return (
    <div className="bg-white">
      Your exam is here <br />
      Running Fast

      <div className="w-full p-10">
        {questinData?.map((questions, index) => (
          <ExamFormate
            key={index}
            questions={questions}
            questionNumber={index + 1}
            onAnswerSelected={handleAnswerSelected}
          />
        ))}
      </div>
      <button className="btn-primary px-3 py-2 rounded-md" onClick={handleSubmitQuiz}>
        Submit
      </button>
    </div>
  );
};

export default Exam;
