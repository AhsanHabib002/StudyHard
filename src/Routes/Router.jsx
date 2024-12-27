import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Assignments from "../Pages/Assignments/Assignments";
import PrivateRoute from "./PrivateRoute";
import AssignmentsDetail from "../Pages/Assignments/AssignmentsDetail";
import SubmitAssignment from "../Pages/Assignments/SubmitAssignment";
import MySubmission from "../Pages/Assignments/MySubmission";
import PendingAssignments from "../Pages/Pendings/PendingAssignments";
import GiveMarks from "../Pages/Pendings/GiveMarks";
import AddAssignment from "../Pages/Assignments/AddAssignment";
import UpdateAssignments from "../Pages/Assignments/UpdateAssignments";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
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
            path:"/assignments/:id",
            element:(<PrivateRoute>
                <AssignmentsDetail></AssignmentsDetail>
            </PrivateRoute>),
        },
        {
            path:"/submit-assignments/:id",
            element:(<PrivateRoute>
                <SubmitAssignment></SubmitAssignment>
            </PrivateRoute>),
        },
        {
            path:"/my-assignment",
            element:(<PrivateRoute>
                <MySubmission></MySubmission>
            </PrivateRoute>),
        },
        {
            path:"/create-assignment",
            element:(<PrivateRoute>
                <AddAssignment></AddAssignment>
            </PrivateRoute>),
        },
        {
            path:"/update-assignment/:id",
            element:(<PrivateRoute>
                <UpdateAssignments></UpdateAssignments>
            </PrivateRoute>),
        },
        {
            path:"/pending-assignments",
            element:(<PrivateRoute>
                <PendingAssignments></PendingAssignments>
            </PrivateRoute>),
        },
        {
            path:"/give-marks/:id",
            element:(<PrivateRoute>
                <GiveMarks></GiveMarks>
            </PrivateRoute>),
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