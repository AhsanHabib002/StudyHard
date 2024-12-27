import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PendingAssignments = () => {
  const [pendingAssignments, setpendingAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://study-hard-server.vercel.app/pending-assignments", {
      withCredentials: true,
    })
    .then((res) => {
        setpendingAssignments(res.data);
        setLoading(false);
      })
  }, []);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  const handleMarks = (id) => {
    navigate(`/give-marks/${id}`);
  };
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-4xl font-bold">
          Pending Assignments: {pendingAssignments.length}
        </h2>
        <div className="mt-[30px] md:mt-[60px]">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Assignment Title</th>
                  <th>Marks</th>
                  <th>Examinee</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingAssignments.map((assignment) => (
                  <tr key={assignment._id}>
                    <td>{assignment.title}</td>
                    <td>{assignment.marks}</td>
                    <td>{assignment.examinee}</td>
                    <td>
                      <button
                        onClick={() => handleMarks(assignment._id)}
                        className="btn bg-[#B9FF66]"
                      >
                        Give Marks
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;
