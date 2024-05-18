import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SingUp from "../pages/Singup/SingUp";
import PrivetRouter from "./PrivetRouter";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import Additems from "../pages/DashBoard/AddItems/Additems";
import AdminRouts from "./AdminRouts";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/DashBoard/userHome/UserHome";
import AdminHome from "../pages/DashBoard/UpdateItem/AdminHome/AdminHome";
// import Cart from "../pages/DashBoard/Cart/Cart";



   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        },
        {
          path:'/secret',
          element:<PrivetRouter><Secret></Secret></PrivetRouter>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
      children:[
        // Normal users
        {
          path:'/deshboard/userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        



        // Admin routs
        
        {
          path:'manageitems',
          element:<AdminRouts><ManageItems></ManageItems></AdminRouts>
      
        },
        {
          path:'updateItem/:id',
          element:<AdminRouts><UpdateItem></UpdateItem></AdminRouts>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
  
        },
        {
          path:'additem',
          element:<AdminRouts><Additems></Additems></AdminRouts>
        },
        {
          path:'users',
          element:<AdminRouts><AllUsers></AllUsers></AdminRouts>
        },
        {
          path:'adminhome',
          element:<AdminRouts><AdminHome></AdminHome></AdminRouts>
        },

      ]
     
    }
    
  ]);