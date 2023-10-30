import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/shared/Homes/Home";
import Login from "../pages/shared/Login/Login";
import SignUp from "../pages/shared/SignUp/SignUp";
import QuestionAdd from "../pages/ExamQuesion/Question/QuestionAdd";
import ExamCreate from "../pages/ExamQuesion/Exam/ExamCreate";
import ExamFree from "../Components/FreeComponents/ExamFree";
import FreeClass from "../Components/FreeComponents/FreeClass";
import MaterailsFree from "../Components/FreeComponents/MaterailsFree";
import Mentors from "../pages/shared/Homes/mentors/Mentors";
import Coureses from "../pages/shared/Homes/courese/Coureses";
import Sidebar from "../Dashboard/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import Exam from "../Dashboard/Exam/Exam";

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
        path:'mentor',
        element:<Mentors/>
      },
      {
        path:'course',
        element:<Coureses/>
      },
      {
        path:'signup',
        element:<SignUp/>
      },
      {
        path:'free_exam',
        element:<ExamFree/>
      },
      {
        path:'free_class',
        element:<FreeClass/>
      },
      {
        path:'free_materials',
        element:<MaterailsFree/>
      },
     
    ],
    
  },

{
  path:'dashboard',
  element:<Sidebar/>,
  children:[
    {
      path:'home',
      element:<Dashboard/>
    },
    {
      path:'addquestion',
      element:<QuestionAdd/>
    },
    {
      path:'exam',
      element:<Exam/>
    },
  ]
},

  // the following code for backend user



  {
    path:'/exam_create',
    element:<ExamCreate/>
  }
])

export default routes;