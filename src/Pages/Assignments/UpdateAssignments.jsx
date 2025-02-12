import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const UpdateAssignments = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [updateAssignment, setUpdateAssignment] = useState([]);
  const [dueDate, setDueDate] = useState(new Date());
  useEffect(() => {
    axios
      .get(`https://study-hard-server.vercel.app/assignments/${id}`, { withCredentials: true })
      .then((res) => {
        setUpdateAssignment(res.data);
        setDueDate(new Date(res.data.dueDate));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedAssignment = {
      title: e.target.title.value,
      thumbnail: e.target.thumbnail.value,
      difficulty: e.target.difficulty.value,
      marks: e.target.marks.value,
      description: e.target.description.value,
      dueDate,
    };
    axios
      .put(`https://study-hard-server.vercel.app/assignments/${id}`, updatedAssignment, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            "Assignment has been updated successfully.",
            "success"
          );
          navigate("/assignments");
        }
      })
      .catch(() => {
        Swal.fire(
          "Error!",
          "Failed to update assignment. Please try again.",
          "error"
        );
      });
  };

  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="pt-[120px] md:pt-[160px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-3xl text-center font-semibold my-[60px]">
          Update Assignment
        </h2>
        <div className="max-w-[640px] mx-auto bg-white shadow-2xl p-5 rounded-md">
          <form onSubmit={handleUpdate}>
            {/* Similar fields as AddAssignment */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={updateAssignment.title}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                name="thumbnail"
                type="url"
                defaultValue={updateAssignment.thumbnail}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                defaultValue={updateAssignment.difficulty}
                className="select select-bordered"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Marks</span>
              </label>
              <input
                name="marks"
                type="number"
                defaultValue={updateAssignment.marks}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={updateAssignment.description}
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <DatePicker
                selected={updateAssignment.dueDate}
                className="input input-bordered"
                dateFormat="yyyy/MM/dd"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Update Assignment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignments;
