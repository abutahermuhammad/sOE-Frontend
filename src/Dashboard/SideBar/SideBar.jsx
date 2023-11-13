
import { Link, NavLink, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Sidebar = () => {
  const { user, logOut,userInfo } = useContext(AuthContext)
  console.log("usr ingo", userInfo)
  const handleLogOut = () => {
    logOut();
  }
  const handleDashboard = () => {
    console.log("click the dashboard")
    fetch(`http://localhost:5000/dashoardDetails/${userInfo?.phone}`)
      .then(res => res.json())
      .then(data => {
        console.log("dashboard user", data);
      })
      .catch(error => {
        console.error("Error fetching dashboard details:", error);
      });
  }
  

  return (
    <div className="text-[16px]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start w-full bg-white">
          {/* Page content here */}


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
          <ul className="menu p-4 w-80 min-h-full bg-gradient-to-t from-[#020957]  to-[#050936]  text-white">
            {/* Sidebar content here */}
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold py-4">Dashboard</h1>
              <img className="mask mask-circle w-24 h-24 border-4 border-purple-500 rounded-full " src={user?.photoURL} alt="Photo " />

              <div className="indicator mt-5">

                <h3 className="mt-1 mr-5 text-[20px]"> {userInfo?.name} </h3>
              </div>

            </div>

            <div className="divider"></div>
            <div className="text-[16px]">
              <li><NavLink onClick={handleDashboard} to='/dashboard/home'>Dashboard</NavLink></li>
              <ul className="menu menu-horizontal px-1 text-[16px] ">
                <li tabIndex={0}>
                  <details>
                    <summary>Exam</summary>
                    <ul className="dropdown-content z-[1] menu shadow bg-[#020957] rounded-box w-52 text-white">
                      <li><NavLink to='/dashboard/exam'>Exam</NavLink></li>
                      <li><NavLink to='/'>Previous Exam</NavLink></li>
                      <li><NavLink to='/'>Random Exam</NavLink></li>

                    </ul>
                  </details>
                </li>

              </ul>
              
              <li><NavLink to='/'>Payment</NavLink></li>
              <ul className="menu menu-horizontal px-1 text-[16px] ">
                <li tabIndex={0}>
                  <details>
                    <summary>Class</summary>
                    <ul className="dropdown-content z-[1] menu shadow bg-[#020957] rounded-box w-52 text-white">
                      <li><NavLink to='/dashboard/exam'>Class</NavLink></li>
                      <li><NavLink to='/'>Previous Class</NavLink></li>
                      {/* <li><NavLink to='/'>Random Exam</NavLink></li> */}

                    </ul>
                  </details>
                </li>

              </ul>
              <li><NavLink to='/'>Community</NavLink></li>
              <ul className="menu menu-horizontal px-1 text-[16px] ">
                <li tabIndex={0}>
                  <details>
                    <summary>Leaderboard</summary>
                    <ul className="dropdown-content z-[1] menu shadow bg-[#020957] rounded-box w-52 text-white">
                      <li><NavLink to='/dashboard/exam'>Top Leader</NavLink></li>
                      <li><NavLink to='/'>Your Progress</NavLink></li>
                      {/* <li><NavLink to='/'>Random Exam</NavLink></li> */}

                    </ul>
                  </details>
                </li>

              </ul>
              <li>              
              </li>

              <ul className="menu menu-horizontal px-1 text-[16px]">
                <li tabIndex={0}>
                  <details>
                    <summary>Support</summary>
                    <ul className="dropdown-content z-[1] menu shadow bg-[#020957] rounded-box w-52 text-white">
                      <li><NavLink to='/'>Doubt Clear</NavLink></li>
                      <li><NavLink to='/'>Touch Mentors</NavLink></li>

                    </ul>
                  </details>
                </li>

              </ul>
            </div>


            {/* divider */}

            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink></li>
            <div className="dropdown dropdown-bottom">
              <li><Link className="flex" >  Profile</Link> </li>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="bg-[#2048ca] rounded-md text-white"><a>Change Password</a></li>
                <li className="bg-[#b2163d] rounded-md text-white mt-2">
                  <button onClick={handleLogOut}>Log Out</button>
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
