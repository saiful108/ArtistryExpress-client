import {createBrowserRouter,} from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import TermsCondition from "../terms/TermsCondition";
import PrivateRoute from "../../Utility/PrivateRoute";
import Features from "../Components/Features";
import AddCraftItem from "../Pages/Add Craft Item/AddCraftItem";
import AllProduct from "../Pages/AllProduct/AllProduct";
import DetailPage from "../Pages/Detail Page/DetailPage";
import MyProduct from "../Pages/MyProduct/MyProduct";
import UpdateProduct from "../Pages/Update/UpdateProduct";
import Catagories from "../Pages/Category/Catagories";
import ProductAll from "../Pages/AllProduct/ProductAll";




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
        },
        {
          path:'/features',
          element:<Features/>
        },
        {
          path:'/addItem',
          element:<PrivateRoute><AddCraftItem/></PrivateRoute>
        },
        {
          path:'/products',
          element:<AllProduct/>,
          loader: () =>fetch(`http://localhost:5000/products`),
        },
        
        {
          path:'/products/:id',
          element:<PrivateRoute><DetailPage/></PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5000/products/${params.id}`),
        },
        {
          path:'/email',
          element:<PrivateRoute><MyProduct/></PrivateRoute>,
          loader: () =>fetch(`http://localhost:5000/products`),
        },
        {
          path:'/update/:id',
          element:<PrivateRoute>
            <UpdateProduct/>
          </PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5000/products/${params.id}`),
        },
        {
          path:'/catagory',
          element:<Catagories/>,
          loader: () =>fetch('http://localhost:5000/products'),
         
        }
      ],
    },
  ]);