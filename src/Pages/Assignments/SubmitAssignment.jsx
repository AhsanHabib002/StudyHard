import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const submitAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const googledoc = form.goolgledoclink.value;
    const note = form.note.value;

    const submitInfo = {
      submit_id: id,
      examinee: user.email,
      googledoc,
      note,
      status: "pending",
      submittedAt: new Date(),
    };

    axios
      .post("https://study-hard-server.vercel.app/submissions", submitInfo, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            text: "Assignment submitted successfully.",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Failed to submit the assignment. Please try again.",
          });
        }
      });
  };
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[120px] md:mt-[160px] px-[30px] md:px-[60px]">
        <div class="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold p-[30px]">
            Submit the following informations:
          </h2>
          <form onSubmit={submitAssignment} class="card-body ">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Google Doc Link</span>
              </label>
              <input
                type="url"
                name="goolgledoclink"
                placeholder="Enter your link"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quick Note</span>
              </label>
              <textarea
                name="note"
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
