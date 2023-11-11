import React, { useState } from "react";

const QuestionComponent = ({ questions, questionNumber, onAnswerSelected }) => {
  const { Answer, Option1, Option2, Option3, Option4, SL, Title, _id } = questions;
  console.log("from formate", questions)
  const options = {
    A: Option1,
    B: Option2,
    C: Option3,
    D: Option4,
  };

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="p-3 bg-white shadow-xl rounded-lg">
      <h1 className="md:text-xl sm:text-[12px] md:font-bold rounded-md sm:font-semibold p-1 bg-slate-100">
        Question {SL}: {Title}
      </h1>
      <ul>
        {Object.entries(options)?.map(([optionLabel, optionValue]) => (
          <li
            className={`border-2 border-slate-100 my-1 p-1 rounded-md ${
              selectedOption === optionLabel ? " bg-purple-200 font-semibold text-[#050936]" : ""
            }`}
            key={optionLabel}
          >
            <label>
              <input
                type="radio"
                name={`question-${SL}`}
                value={optionLabel}
                checked={selectedOption === optionLabel}
                onChange={() => {
                  setSelectedOption(optionLabel);
                  onAnswerSelected(_id, optionLabel); // Fixed the prop name here
                }}
                disabled={!!selectedOption}
              />
              <span> {optionValue}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="text-[#050936] font-semibold">Selected option: {selectedOption}</p>
    </div>
  );
};

export default QuestionComponent;
