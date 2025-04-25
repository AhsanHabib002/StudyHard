import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AssignmentsDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://study-hard-server.vercel.app/assignments/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setAssignment(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center pt-[120px] md:pt-[160px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 pt-[120px] md:pt-[160px] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#B9FF66] to-[#ACCDFF] rounded-xl p-6 mb-10 shadow-md">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#191A23]">{assignment.title}</h2>
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-md mb-10">
        <img
          src={assignment.thumbnail}
          alt="Assignment"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />
      </div>

      {/* Details */}
      <div className="bg-white shadow-md rounded-xl p-6 md:p-10 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#191A23] mb-2">Description</h3>
          <p className="border-l-4 border-[#B9FF66] pl-4 text-gray-700">{assignment.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Marks</span>
            <span className="font-semibold text-lg text-[#191A23]">{assignment.marks}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Difficulty</span>
            <span className="font-semibold text-lg text-[#191A23]">{assignment.difficulty}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Due Date</span>
            <span className="font-semibold text-lg text-[#191A23]">{assignment.dueDate}</span>
          </div>
        </div>

        <Link to={`/submit-assignments/${assignment._id}`} className="block">
          <button className="w-full bg-[#B9FF66] hover:bg-[#a1f347] text-[#191A23] font-semibold py-3 rounded-lg transition">
            Take Assignment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AssignmentsDetail;
