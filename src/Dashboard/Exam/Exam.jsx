import React, { useState, useEffect } from "react";
import ExamFormate from "./ExamFormate";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useMemo } from "react";

const Exam = () => {
  const [match, setMatch] = useState("");
  const { userInfo } = useContext(AuthContext)
  const [users, setUsers] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [admissionData, setAdmissionData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questioneData, setquestioneData] = useState([]);
  const [roll, setRoll] = useState('');
  const [error, setError] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [showWaitForResult, setShowWaitForResult] = useState(false);
  const [showStartExamButton, setShowStartExamButton] = useState(false);

  const filteredRoutineData = useMemo(() => {
    if (dashboardData[0] && admissionData.length > 0) {
      return admissionData.filter(item => item.batch === dashboardData[0]?.batch);
    }
    return [];
  }, [dashboardData, admissionData]);

  const navigate = useNavigate();
  console.log("form exam", questioneData)
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
    fetch(`http://localhost:5000/routine_list/${currentDate}`)
      .then(response => response.json())
      .then(data => {

        setAdmissionData(data);
      })
      .catch(error => console.error(error));
  }, [currentDate]);

  useEffect(() => {
    setLoadingUser(true);

    fetch("http://localhost:5000/user_list")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoadingUser(false);
        setisLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching user details:", error);
        setLoadingUser(false);
      });
  }, []);

  useEffect(() => {
    if (userInfo) {
      fetch('http://localhost:5000/admission_list')
        .then((res) => res.json())
        .then((data) => {
          const filteredData = data.filter(item => item.phone === userInfo.phone);
          setDashboardData(filteredData);

          setisLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dashboard details:", error);
          setisLoading(false);
        });
    }
  }, [userInfo]);

  console.log(
    filteredRoutineData
  )

  const handleExamByName = async () => {
    try {
      const response = await fetch(`http://localhost:5000/question_list/${filteredRoutineData[0]?.exam}`);
      const questions = await response.json();

      setquestioneData(questions);
      console.log("questionname", questions);
      console.log("After fetching questions:", questions);
      setShowStartExamButton(false); // Hide the "Start Exam" button
      setShowWaitForResult(false); // Hide the "Wait for result" message
      setShowInput(false); // Hide the input field

    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };


  const handleSearchRoll = event => {
    event.preventDefault();
    const form = event.target;
    const roll = form.rollNumber.value;
    fetch(`http://localhost:5000/result_list/${roll}/${filteredRoutineData[0].exam}/${userInfo.phone}`)
      .then(res => res.json())
      .then(data => {
        console.log("roll data", data);
        if (data.message == "Result already exists") {
          setShowInput(false);
          setShowWaitForResult(true);
        }
        else if (data.message == "Result does not exist") {
          setShowStartExamButton(true);
        }
        else {
         setError("Unauthorized Access, Internal Server Error")
        }
      })
    // console.log(roll);
  }

  return (

    <div className="w-full md:px-10 md:mt-2">
      <p className="text-red-500 text-center">{error}</p>
      {showInput && !showStartExamButton &&(
        // Render input field if roll is not entered
                <form onSubmit={handleSearchRoll} >
          <div className="w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text md:text-[20px]">Input Your Roll Number</span>
              </label>
              <input type="text" placeholder="Roll Number" name="rollNumber" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Search Roll</button>
            </div>
          </div>

        </form>
      )}

      {showWaitForResult && (
        // Render "Wait for result" message if roll exists in result collection
        <div>
          <p className="text-3xl text-center text-yellow-600">তুমি ইতোমধ্যে পরীক্ষায় অংশগ্রহণ করে ফেলেছো</p>
          <Link to="/result">result</Link>

        </div>
      )}

      {showStartExamButton && showInput && (
        // Render "Start Exam" button if roll doesn't exist in result collection
        <button className="btn btn-warning mx-auto text-center flex justify-center mt-3" onClick={handleExamByName}>
          Start Exam
        </button>
      )}

      {questioneData && questioneData.length > 0 && (
        // Render main content if questions are available
        <div>
          <div className="w-full p-10 bg-[#f4f4f5] grid md:grid-cols-2 gap-5">
            {questioneData.map((questions, index) => (
              <ExamFormate
                key={index}
                questions={questions}
                questionNumber={index + 1}
                onAnswerSelected={handleAnswerSelected}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="btn-primary px-3 py-2 rounded-md "
              onClick={handleSubmitQuiz}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>



  );
};

export default Exam;
