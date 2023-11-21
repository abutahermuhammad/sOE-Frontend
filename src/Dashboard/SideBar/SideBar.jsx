
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import MyCourseCard from "../../Components/MyCourseCard";
import Spinner from "../../Components/Spinner";

const Sidebar = () => {
  const { user, logOut, userInfo } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoadingUser(true);

    // Fetch user data
    fetch(`${import.meta.env.VITE_API_URL}/user_list`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        // console.log(data)
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
    setisLoading(true);
    if (currentUser) {
      
      // Fetch dashboard data
      fetch(`${import.meta.env.VITE_API_URL}/mycourses`)
        .then((res) => res.json())
        .then((data) => {
          setisLoading(false)
          // Filter and set dashboard data based on the currentUser
          const filteredData = data.data.filter(item => item.phone === currentUser.phone);
          setDashboardData(filteredData);
          setisLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dashboard details:", error);
        });
        
    }

  }, [loadingUser, userInfo?.phone, users, currentUser]);

  const handleLogOut = () => {
    logOut();
  }



  return (
    <div className="text-[16px]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start w-full bg-white">
          {/* Page content here */}
          <div className=' bg-[#020957] p-2 py-8 w-full '>
          </div>

          <div className="absolute left-5 dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
          {/* dashoard content--------- */}
          {location.pathname === '/dashboard' && (


            <div className="w-full px-10 min-h-screen">
              <h1 className="text-[40px] text-center py-2 rounded-lg my-3 font-semibold text-slate-50 bg-gradient-to-r from-blue-500 via-violet-800 to-[#140e4d] "> আমার কোর্স সমূহ  </h1>
              {/* Rest of your component */}
              {

                isLoading ? <Spinner /> :
                  <div className="mx-auto grid md:grid-cols-3 gap-5 ">
                    {dashboardData && dashboardData.length > 0 ? (
                      dashboardData.map(mycourse => (
                        <MyCourseCard key={mycourse._id} mycourse={mycourse} />
                      ))
                    ) : (
                      <div>
                        <p className="text-center text-red-500 text-2xl font-bold">No courses available. </p>
                        <Link className="text-green-500" to="/">Go to Home</Link>
                      </div>
                    )}

                  </div>

              }

            </div>

          )}

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
              <li><NavLink to='/dashboard/home'>My Routine</NavLink></li>

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
