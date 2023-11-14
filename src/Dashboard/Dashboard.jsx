import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext)
const [users, setUsers] = useState([])

useEffect(() => {
  fetch('http://localhost:5000/user_list').then(res => res.json())
  .then(data =>{
    setUsers(data)

  })
},[])

const currentUserPhone = userInfo?.phone;
const currentUser = users.find(user => user.phone === currentUserPhone);


  return (
    <div>
      <h1>my routine------------</h1>
    </div>
  );
};

export default Dashboard;