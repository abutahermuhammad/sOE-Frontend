// import React from 'react'
// import Lottie from 'react-lottie';

import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

// import typing from "../../../../public/typing.json"
const Login = () => {
const navigate = useNavigate();
  const {user, error, login,loading} = useContext(AuthContext);

  const handleLogin = async(event) =>{
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const password = form.password.value;

await login(phone,password)

if(user?.status == "invalid User"){
  navigate('/login')
}
// else{
//   navigate('/')
// }
console.log("log user", user)
  }



  return (

    <div className="mt-20 container mx-auto">

    {/* ---- */}

    {
      loading? <p>loading.. </p> :<div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left">

          <div className="w-1/2 mx-auto">
            {/* <Lottie animationData={typing} ></Lottie> */}
          </div>


        </div>
        <div className="card md:shrink-0 md:w-96 max-w-sm shadow-2xl bg-base-100">
          <h1 className="md:text-5xl text-center md:p-4 font-bold">Login now!</h1>
          <p className="text-red-500"> {error} </p>
          <div className="card-body">
            {/* form */}
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-[20px]">Phone</span>
                </label>
                <input type="text" placeholder="phone" name="phone" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-[20px]">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

            </form>
            <p>New to Soe? <Link className="text-green-500" to="/"> sign up </Link> </p>
          </div>
        </div>
      </div>
    </div>
    }

  </div>
  );
};

export default Login;