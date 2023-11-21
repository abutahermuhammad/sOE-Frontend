import { format, parse } from 'date-fns';

import { useState, useEffect } from "react";
import ExamFormate from "./ExamFormate";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useMemo } from "react";

const Exam = () => {
  const [examNow, setexamNow] = useState([]);
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
  const parseCustomTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return parse(`${hours}:${minutes}`, 'HH:mm', new Date());
  };
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
    fetch(`${import.meta.env.VITE_API_URL}/routine_list/${currentDate}`)
      .then(response => response.json())
      .then(data => {

        setAdmissionData(data);
      })
      .catch(error => console.error(error));
  }, [currentDate]);

  useEffect(() => {
    setLoadingUser(true);

    fetch(`${import.meta.env.VITE_API_URL}/user_list`)
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
      fetch(`${import.meta.env.VITE_API_URL}/admission_list`)
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/question_list/${filteredRoutineData[0]?.exam}`);
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

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/exam_list/${filteredRoutineData[0].exam}`)
    .then(res => res.json())
    .then(data => {
      setexamNow(data);
      console.log("exam data ff", data);
    })
  },[filteredRoutineData])


  const handleSearchRoll = event => {
    event.preventDefault();
    const form = event.target;
    const roll = form.rollNumber.value;
    fetch(`${import.meta.env.VITE_API_URL}/result_list/${roll}/${filteredRoutineData[0].exam}/${userInfo.phone}`)
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
      {showInput && !showStartExamButton && (
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
        <button className="btn btn-warning mx-atext-2xluto text-center flex justify-center mt-3" onClick={handleExamByName}>
          Start Exam
        </button>
      )}

      {questioneData && questioneData.length > 0 && (
        // Render main content if questions are available
        <div>
          <div className="md:w-8/12 w-full p-1 md:flex  md:gap-40 gap-5 justify-center  items-center rounded-lg bg-[#020957]  fixed z-40 top-0 text-yellow-500 ">
            <h1 className="md:text-2xl">Remaining Time</h1>
            {/* ********** */}

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">

              <div className="flex flex-col md:p-2 p-1 bg-white  rounded-box text-red-500">
                <span className="countdown font-mono md:text-2xl text-red-500">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col md:p-2 p-1 bg-white  rounded-box text-red-500">
                <span className="countdown font-mono md:text-2xl text-red-500">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col md:p-2 p-1 bg-white  rounded-box text-red-500">
                <span className="countdown font-mono md:text-2xl text-red-500">
                  <span style={{ "--value": 47 }}></span>
                </span>
                sec
              </div>

            </div>
            <div>
              {/* <h1 className="md:text-2xl">Exam End Time: {format(parseCustomTime(filteredRoutineData[0].endTime), 'h:mm a')} </h1> */}
            </div>
          </div>
          <div>

            <div className="w-full p-10 bg-[#f4f4f5] grid md:grid-cols-2 gap-5 mt-6">
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

        </div>
      )}
    </div>



  );
};

export default Exam;
