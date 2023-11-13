import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Headers = () => {
  const { user,logOut } = useContext(AuthContext);

 
  console.log(user)

// console.log("user frm ", user)
  // handle logout
  const handleLogOut = () =>{
   logOut()
  }

  return (
    <div className="navbar bg-[#140e4d] bg-opacity-30 fixed top-0 z-20 md:text-[20px] text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000324] rounded-box w-52">
            <li><Link to="/course">Courses</Link></li>
            <li> <Link to="/mentor">Mentors</Link> </li>
            <li> <Link> Career </Link> </li>
            {/* todo user routes conditionally show the routes only when user is login or user isAuthencitaed */}
            {
          user?.isAuthenticated && (
            <li className="hover:bg-white rounded-md hover:font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )
        }
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case md:text-xl">
          <img className="md:h-12 h-4" src="/public/soe.png" alt="" />
        </Link>
      </div>


      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-[20px] ">
          <li className="hover:bg-white rounded-md hover:font-semibold">
            <Link to="/course"> Courses </Link></li>

          <li className="hover:bg-white rounded-md hover:font-semibold">
            <Link to="/mentor">Mentors</Link> </li>
          <li className="hover:bg-white rounded-md hover:font-semibold "> <Link> Career </Link> </li>
          {
          user?.isAuthenticated && (
            <li className="hover:bg-white rounded-md hover:font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )
        }
        </ul>
      </div>


      <div className="navbar-end">
        <div>
          {/* todo user routes conditionally */}
          {
              user?.isAuthenticated ? 
                <button onClick={handleLogOut}  className="btn btn-ghost">Log Out</button>
                : <>
                 <Link to='/login'>Login</Link></>
              
              

            }
         
        </div>
      </div>





    </div>
  );
};

export default Headers;