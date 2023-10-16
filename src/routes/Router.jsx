import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/shared/Homes/Home";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])

export default routes;