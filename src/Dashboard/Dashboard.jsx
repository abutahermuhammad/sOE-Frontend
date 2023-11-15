import { format, parse } from 'date-fns';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Calender from "../Components/Calender";

const parseCustomTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return parse(`${hours}:${minutes}`, 'HH:mm', new Date());
};

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext)
  const [users, setUsers] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [routineData , setRoutineData] = useState([]);
 console.log(dashboardData)

  // {
  //   routineData?.map(routine => setRoutine(routine) )
  // }

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
        // console.log("routine", data)
        const filterRoutine = data.filter(item => item?.batch === dashboardData[0].batch );
        console.log("filter", filterRoutine);
        setRoutineData(filterRoutine);
        })
      .catch(error => console.error(error));
  }, [currentDate]);

useEffect(() => {
  setLoadingUser(true);

  // Fetch user data
  fetch("http://localhost:5000/user_list")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoadingUser(false); // Set loading to false once user data is fetched
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
      // setLoadingUser(false); // Set loading to false in case of an error
    });
}, []);
const currentUserPhone = userInfo?.phone;
const currentUser = users.find((user) => user.phone === currentUserPhone);
useEffect(() => {

   if(currentUser){
    fetch('http://localhost:5000/admission_list')
    .then((res) => res.json())
    .then((data) => {
// console.log("first", data)
      // Filter and set dashboard data based on the currentUser
      const filteredData = data.filter(item => item.phone === currentUser.phone);
  setDashboardData(filteredData);
     })
    .catch((error) => {
      console.error("Error fetching dashboard details:", error);
    });
   }
  

}, [currentUser, currentDate, routineData]);



  return (
    <div className="w-4/5 md:px-10 mt-3 md:flex justify-around items-center  gap-6 shadow-2xl rounded-lg p-5 ">   

      <Calender
      currentDate={currentDate}
      onPrevClick={handlePrevClick}
      onNextClick={handleNextClick}
      />
      <div className="text-center">
           {/* Check if routineData is not empty */}
           {routineData.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">
              পরীক্ষা: {routineData[0].exam} <span> সময়:   {format(parseCustomTime(routineData[0].examTime), 'h:mm a')}</span>
            </h2>
            <h2 className="text-2xl font-semibold">ক্লাস: {routineData[0].routineClass}</h2>
          </>
        ) : (
          <p className="text-red-500 text-xl" > আজ তোমার কোনো রুটিন নাই ! </p>
        )}
      </div>
   
      
    </div>
  );
  };

export default Dashboard;