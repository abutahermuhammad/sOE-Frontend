import React, { useState, useEffect } from "react";

const ExamFormate = ({ questions, questionNumber, onAnswerSelected }) => {
  const { question, options } = questions;

  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});

  const handleAnswerSelection = (selectedAnswer) => {
    // Update the selected answer for the current question in the `answers` state
    setAnswers({
      ...answers,
      [questionNumber]: selectedAnswer,
    });

    // Notify the central component of the selected answer
    onAnswerSelected(questionNumber, selectedAnswer);
  };

  useEffect(() => {
    console.log("Selected option:", answers);
  }, [answers]);

  return (
    <div className="p-3">
      <h1>Question {questionNumber}: {question}</h1>
      <ul>
        {Object.keys(options).map((optionLabel) => (
          <li key={optionLabel}>
            <label>
              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={optionLabel}
                checked={selectedOption === optionLabel}
                onChange={() => {
                  setSelectedOption(optionLabel);
                  handleAnswerSelection(optionLabel);
                }}
                disabled={!!selectedOption}
              />
              {optionLabel}: {options[optionLabel]}
            </label>
          </li>
        ))}
      </ul>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default ExamFormate;
