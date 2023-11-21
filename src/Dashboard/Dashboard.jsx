import { format, parse } from 'date-fns';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Calender from "../Components/Calender";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { useMemo } from 'react';
import Exam from './Exam/Exam';

const parseCustomTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return parse(`${hours}:${minutes}`, 'HH:mm', new Date());
};

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext)
  const [users, setUsers] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
 
 const [admissionData, setAdmissionData] = useState([]);
 const [isButtonEnable, setisButtonEnable] = useState(false);
 const { pathname } = useLocation();
//  


 const filteredRoutineData = useMemo(() => {
   if (dashboardData[0] && admissionData.length > 0) {
     return admissionData.filter(item => item.batch === dashboardData[0]?.batch);
   }
   return [];
 }, [dashboardData, admissionData]);


  const handlePrevClick = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextClick = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/routine_list/${currentDate}`)
      .then(response => response.json())
      .then(data => {
        
        setAdmissionData(data.data);
      })
      .catch(error => console.error(error));
  }, [currentDate]);
  
  useEffect(() => {
    setLoadingUser(true);

    fetch(`${import.meta.env.VITE_API_URL}/user_list`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
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
          const filteredData = data.data.filter(item => item.phone === userInfo.phone);
          setDashboardData(filteredData);
          
          setisLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dashboard details:", error);
          setisLoading(false);
        });
    }
  }, [userInfo]);
  // current data
  // Get current date and time
let toDay = new Date();
// Format the date as yyyy-MM-dd
let year = toDay.getFullYear();
let month = String(toDay.getMonth() + 1).padStart(2, '0'); // Months are ero-based
let day = String(toDay.getDate()).padStart(2, '0');
let formattedDate = `${year}-${month}-${day}`;
// Format the time as HH:mm
let hours = String(toDay.getHours()).padStart(2, '0');
let minutes = String(toDay.getMinutes()).padStart(2, '0');

let formattedTime = `${hours}:${minutes}`;


useEffect(() => {
  if (filteredRoutineData.length > 0) {
    if (filteredRoutineData[0].date >= formattedDate && (filteredRoutineData[0].examTime <= formattedTime && filteredRoutineData[0].endTime >= formattedTime) ) {
      setisButtonEnable(true);
    } else { 
      setisButtonEnable(false);
    }
  }
}, [filteredRoutineData, formattedDate, formattedTime]);








  


  return (

     <div className="w-4/5 md:px-10 mt-3 md:flex justify-around items-center  gap-6 shadow-2xl rounded-lg p-5 ">   

<Calender
currentDate={currentDate}
onPrevClick={handlePrevClick}
onNextClick={handleNextClick}
/>
<div className="text-center">
     {/* Check if routineData is not empty */}

    
{filteredRoutineData.length > 0 ? (
    <>
    <button disabled={!isButtonEnable}  >
 
 {
  isButtonEnable ? 
  (
    <Link to='/dashboard/exam'>
    <h2 className="text-2xl font-semibold mb-2 text-purple-600 hover:text-red-500">
       পরীক্ষা: {filteredRoutineData[0].exam}  |  <span className='text-green-500'>
         {isButtonEnable ? (
           ' পরীক্ষা চলতেছে . . .'

         )  :  (
           ` সময়: ${format(parseCustomTime(filteredRoutineData[0].examTime), 'h:mm a')}`
         )}
       </span>
     </h2>
     </Link>
  ):(
    <h2 className="text-2xl font-semibold mb-2 text-purple-600 hover:text-red-500">
    পরীক্ষা: {filteredRoutineData[0].exam}  |  <span className='text-green-500'>
      {isButtonEnable ? (
        ' পরীক্ষা চলতেছে . . .'

      )  :  (
        ` সময়: ${format(parseCustomTime(filteredRoutineData[0].examTime), 'h:mm a')}`
      )}
    </span>
  </h2>
  )

 }

    </button>
     <Link>
     <h2 className="text-2xl font-semibold hover:text-red-500">ক্লাস: {filteredRoutineData[0]?.routineClass}</h2>
     </Link>
    </>
  ) : (
    <p className="text-red-500 text-xl" > আজ তোমার কোনো রুটিন নাই ! </p>
  )}

    
  
</div>




</div>


  );
  };

export default Dashboard;