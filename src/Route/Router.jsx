import {createBrowserRouter,} from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import TermsCondition from "../terms/TermsCondition";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
            path:'signup',
            element:<SignUp/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
          path:'/terms',
          element:<TermsCondition/>
        }
      ],
    },
  ]);