import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h2>Route not Found</h2>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"login",
            element:<Login></Login>
        },
    ]
  },
]);

export default Router;