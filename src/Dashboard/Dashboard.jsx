import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext)
  const [users, setUsers] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);

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

  if (currentUser) {
    console.log("current user", currentUser);  
    // Fetch dashboard data
    fetch("http://localhost:5000/routine_list")
      .then((res) => res.json())
      .then((data) => {

        // Filter and set dashboard data based on the currentUser
        const filteredData = data.filter(item => item.phone === currentUser.phone);
        setDashboardData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching dashboard details:", error);
      });
  }

}, [loadingUser, userInfo?.phone, users]);



  return (
    <div>
      <h1>my routine------------</h1>
    </div>
  );
};

export default Dashboard;