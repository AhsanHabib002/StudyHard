import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PendingAssignments = () => {
  const [pendingAssignments, setpendingAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://study-hard-server.vercel.app/pending-assignments", {
          withCredentials: true,
        })
        .then((res) => {
          setpendingAssignments(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 500);
  }, []);

  const handleMarks = (id) => {
    navigate(`/give-marks/${id}`);
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center pt-[120px] md:pt-[160px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] md:pt-[160px] pb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#191A23]">
          Pending Assignments ({pendingAssignments.length})
        </h2>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#F0F4F8] text-[#191A23] uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Assignment Title</th>
              <th className="px-6 py-4">Marks</th>
              <th className="px-6 py-4">Examinee</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((assignment, index) => (
              <tr
                key={assignment._id}
                className={`border-b transition hover:bg-[#f9f9f9] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                }`}
              >
                <td className="px-6 py-4 font-medium">{assignment.title}</td>
                <td className="px-6 py-4">{assignment.marks}</td>
                <td className="px-6 py-4">{assignment.examinee}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleMarks(assignment._id)}
                    className="px-4 py-2 rounded-md bg-[#B9FF66] hover:bg-[#a3f047] transition font-semibold text-[#191A23] shadow-sm"
                  >
                    Give Marks
                  </button>
                </td>
              </tr>
            ))}
            {pendingAssignments.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-500">
                  No pending assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
