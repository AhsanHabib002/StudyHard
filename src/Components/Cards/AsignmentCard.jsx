import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AsignmentCard = ({ assignment }) => {
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
          .delete(`http://localhost:5000/assignments/${_id}`, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.data.success) {
              Swal.fire("Deleted!", response.data.message, "success");
            } else {
              Swal.fire("Failed!", response.data.message, "error");
            }
          })
          .catch((error) => {
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
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[200px] object-cover"
            src={thumbnail}
            alt="Assignment Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Difficultly: {difficulty}</p>
          <p>Mark: {marks}</p>
          <div className="card-actions grid grid-cols-1 md:grid-cols-2">
            <Link to={`/update-assignment/${_id}`}>
              <button className="btn bg-[#ACCDFF] w-full">Update</button>
            </Link>

            <button onClick={handleDelete} className="btn w-full bg-[#F85959]">
              Delete
            </button>
          </div>
          <div className="card-actions flex">
            <Link to={`/assignments/${_id} `} className="w-full">
              <button className="btn w-full bg-[#B9FF66]">
                View Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignmentCard;
