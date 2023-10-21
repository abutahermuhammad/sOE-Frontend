import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/shared/Homes/Home";
import Login from "../pages/shared/Login/Login";
import SignUp from "../pages/shared/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'signup',
        element:<SignUp/>
      },
    ]
  }
])

export default routes;