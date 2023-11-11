import React, { useState, useEffect } from "react";
import ExamFormate from "./ExamFormate";
import { Link, useNavigate } from "react-router-dom";

const Exam = () => {
  const [match, setMatch] = useState(""); 
 const [questionData, setQuestionData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerSelected = (questionNumber, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedAnswer,
    }));
  };

  const handleSubmitQuiz = () => {
    console.log("Selected Answers:", selectedAnswers);
    navigate('/dashboard/writtenexam');
  };

  useEffect(() => {
    fetch('http://localhost:5000/questionList')
      .then((res) => res.json())
      .then((data) => {
        setQuestionData(data);
        console.log("question", data)
      });
  }, []);

  return (
    match !== "attend" ? (
      <div className="bg-white w-full p-5">
        Your exam is here <br />
        Running Fast

        <div className="w-full p-10 bg-[#f4f4f5] grid md:grid-cols-2 gap-5">
          {questionData?.map((questions, index) => (
            <ExamFormate
              key={index}
              questions={questions}
              questionNumber={index + 1}
              onAnswerSelected={handleAnswerSelected}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn-primary px-3 py-2 rounded-md " onClick={handleSubmitQuiz}>
            Submit
          </button>
        </div>
      </div>
    ) :   <div>
    <p>তুমি ইতোমধ্যে পরীক্ষায় অংশগ্রহণ করে ফেলেছো</p>
    <Link to="/result">result</Link>
  </div>
  );
};

export default Exam;
