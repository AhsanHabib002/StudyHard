import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const AddAssignment = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    difficulty: "Easy",
    description: "",
    marks: "",
    dueDate: new Date(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, dueDate: date });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.thumbnail ||
      !formData.description ||
      !formData.marks
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all required fields.",
      });
      return;
    }
    const assignmentData = {
      ...formData,

      email: user?.email || "anonymous@example.com",
      username: user?.displayName || "Anonymous",
    };
    axios
      .post("https://study-hard-server.vercel.app/assignments", assignmentData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Assignment created successfully!",
          });
        }
      });
    setFormData({
      image: "",
      title: "",
      type: "personal issue",
      description: "",
      minimum_donation_amount: "",
      deadline: "",
    });
  };
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-3xl text-center font-semibold">
          Add Assignment
        </h2>
        <div className="max-w-[640px] mx-auto bg-white shadow-2xl p-5 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="md:flex gap-4 w-full">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Assignment Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Assignment title"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  name="thumbnail"
                  type="url"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="thumbnail url"
                  className="input input-bordered "
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-4 w-full">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Difficulty</span>
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="select select-bordered"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Mark</span>
                </label>
                <input
                  name="marks"
                  type="number"
                  value={formData.marks}
                  onChange={handleChange}
                  placeholder="Marks"
                  className="input input-bordered "
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-4 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
                  placeholder="Enter campaign description"
                  className="textarea textarea-lg textarea-bordered w-full"
                  required
                ></textarea>
              </div>
            </div>
            <div className="md:flex gap-4 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Due Date</span>
                </label>
                <DatePicker
                  selected={formData.dueDate}
                  onChange={handleDateChange}
                  className="input input-bordered w-full"
                  dateFormat="yyyy/MM/dd"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-4 w-full">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={user?.email || ""}
                  placeholder="Email"
                  className="input input-bordered "
                  required
                  readOnly
                />
              </div>
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="username"
                  type="text"
                  value={user?.displayName || ""}
                  placeholder="Your Name"
                  className="input input-bordered "
                  required
                  readOnly
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <input
                type="submit"
                value="Create Assignment"
                className="btn bg-[#BDE345] w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAssignment;
