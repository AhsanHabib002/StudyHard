import React from "react";
import { Link } from "react-router-dom";

const AsignmentCard = ({ assignment }) => {
  const { _id, title, thumbnail, marks, difficulty } = assignment;
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
            <button className="btn bg-[#ACCDFF] w-full">Update</button>
            <Link>
              <button className="btn w-full bg-[#F85959]">Delete</button>
            </Link>
          </div>
          <div className="card-actions flex">
            <Link to={`/assignments/${_id} `}className="w-full">
              <button className="btn w-full bg-[#B9FF66]">View Assignment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignmentCard;
