import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
const { user,userInfo, loading} = useContext(AuthContext);
console.log(user,"form private")
const location = useLocation();
if(loading){
  return <p>Loading...</p>
}
if(user?.isAuthenticated && userInfo?.phone){
  return children;
}

  return  <Navigate to ='/login' state={{from:location}} replace  ></Navigate>;
}
export default PrivateRoutes;