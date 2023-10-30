import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import QuestionAdd from "../../pages/ExamQuesion/Question/QuestionAdd";

const Sidebar = () => {


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start w-full bg-white">
          {/* Page content here */}
          <div>
            <h1>আমার রুটিন</h1>
          </div>

          <div className="absolute left-5 dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <Outlet />



        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-blue-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold py-4">Dashboard</h1>
              {/* <img className="mask mask-circle w-24 h-24 border-4 border-purple-500 rounded-full " src={user?.photoURL} alt="Image" /> */}
              {/* 
              <div className="indicator mt-5">
                <span className="indicator-item badge badge-secondary">{currentUser?.role}</span>
                <h3 className="mt-1 mr-5 text-[20px]"> {user?.displayName} </h3>
              </div> */}

            </div>

            <div className="divider"></div>
            {/* {
              currentUser && currentUser.role == 'admin' &&
              <div>
                <li><NavLink to='/dashboard/manageuser'>Manage User</NavLink>  </li>
                <li> <NavLink to="/dashboard/managedoctor"> Manage Doctor </NavLink> </li>
                <li> <NavLink to="/dashboard/manageservice"> Manage Service </NavLink> </li>
                <li> <NavLink to="/dashboard/incomeledger"> Income Ledger
                </NavLink> </li>
              </div>} */}
            {/* {
              currentUser && currentUser.role === 'owner' &&
              <div>
                <li> <NavLink to="/dashboard/managedoctor"> Manage Doctor </NavLink> </li>
                <li> <NavLink to="/dashboard/incomeledger"> Income Ledger
                </NavLink> </li>
              </div>
            } */}
            {/* {
              currentUser && currentUser.role === 'staff' &&
              <div>

                <li> <NavLink to="/dashboard/incomeledger"> Income Ledger
                </NavLink> </li>
              </div>
            } */}


            {/* divider */}

            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink></li>
            <div className="dropdown dropdown-bottom">
              <li><Link className="flex" >  Profile</Link> </li>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="bg-[#2048ca] rounded-md text-white"><a>Change Password</a></li>
                <li className="bg-[#b2163d] rounded-md text-white mt-2">
                  {/* <button onClick={handleLogOut}>Log Out</button> */}
                </li>
              </ul>
            </div>

          </ul>



        </div>
      </div>
    </div>
  );
};

export default Sidebar;
