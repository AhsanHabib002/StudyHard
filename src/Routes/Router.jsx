import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Assignments from "../Pages/Assignments/Assignments";

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
            path:"assignments",
            element: <Assignments></Assignments>,
            loader: async () => {
                const response = await fetch("http://localhost:5000/assignments");
                return response.json();
            },
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