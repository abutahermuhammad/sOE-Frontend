import { format, parse } from 'date-fns';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Calender from "../Components/Calender";
import { Link } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { useMemo } from 'react';

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
  const [routineData , setRoutineData] = useState([]);

 const [admissionData, setAdmissionData] = useState([]);


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
           <Link to='/'>
           <h2 className="text-2xl font-semibold mb-2 text-purple-600 hover:text-red-500">
              পরীক্ষা: {filteredRoutineData[0].exam} <span> সময়:   {format(parseCustomTime(filteredRoutineData[0].examTime), 'h:mm a')}</span>
            </h2>
           </Link>
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