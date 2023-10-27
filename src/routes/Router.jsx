import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/shared/Homes/Home";
import Login from "../pages/shared/Login/Login";
import SignUp from "../pages/shared/SignUp/SignUp";
import QuestionAdd from "../pages/ExamQuesion/Question/QuestionAdd";
import ExamCreate from "../pages/ExamQuesion/Exam/ExamCreate";

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
    ],
    
  },
  {
    path:'/addquestion',
    element:<QuestionAdd/>
  },
  {
    path:'/exam_create',
    element:<ExamCreate/>
  }
])

export default routes;