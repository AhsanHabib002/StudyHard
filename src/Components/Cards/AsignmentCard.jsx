import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, thumbnail, marks, difficulty } = assignment;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://study-hard-server.vercel.app/assignments/${_id}`, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.data.success) {
              Swal.fire("Deleted!", response.data.message, "success");
            } else {
              Swal.fire("Failed!", response.data.message, "error");
            }
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Failed to delete assignment. Try again later.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <img
        src={thumbnail}
        alt="Assignment"
        className="w-full h-[200px] object-cover"
      />

      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#191A23] h-[60px] leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Difficulty:</span> {difficulty}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Marks:</span> {marks}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link to={`/update-assignment/${_id}`}>
            <button className="w-full py-2 bg-blue-200 hover:bg-blue-300 text-[#191A23] font-semibold rounded-lg transition">
              Update
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="w-full py-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg transition"
          >
            Delete
          </button>
        </div>

        <Link to={`/assignments/${_id}`}>
          <button className="w-full py-2 bg-[#B9FF66] hover:bg-[#a3f348] text-[#191A23] font-semibold rounded-lg transition">
            View Assignment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AssignmentCard;
