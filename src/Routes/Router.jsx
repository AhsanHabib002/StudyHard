import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h2>Route not Found</h2>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        }
    ]
  },
]);

export default Router;