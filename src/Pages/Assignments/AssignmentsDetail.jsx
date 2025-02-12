import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AssignmentsDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://study-hard-server.vercel.app/assignments/${id}`, { withCredentials: true })
      .then((res) => {
        setAssignment(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); 
      });
  }, [id]);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[120px] md:mt-[160px] px-[30px] md:px-[60px]">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-2xl md:text-4xl font-bold">{assignment.title}</h2>
          <img
            className="w-full h-[450px] object-cover rounded-lg"
            src={assignment.thumbnail}
            alt=""
          />
          <div>
            <h3 className="text-xl md:text-2xl font-medium">Description:</h3>
            <div className="border-l-2 border-[#B9FF66] pl-4 mt-[15px]">
              <p>{assignment.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Marks:</p>
            <p>{assignment.marks}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Difficulty:</p>
            <p>{assignment.difficulty}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Due Date:</p>
            <p>{assignment.dueDate}</p>
          </div>
          <Link to={`/submit-assignments/${assignment._id}`} className="w-full">
          <button className="btn w-full bg-[#B9FF66]">Take Assignment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsDetail;
