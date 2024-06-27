import {createBrowserRouter,} from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import TermsCondition from "../terms/TermsCondition";
import PrivateRoute from "../../Utility/PrivateRoute";
import Features from "../Components/Features";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element:<PrivateRoute><Home/></PrivateRoute>,
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
        },
        {
          path:'/features',
          element:<PrivateRoute><Features/></PrivateRoute>
        }
      ],
    },
  ]);