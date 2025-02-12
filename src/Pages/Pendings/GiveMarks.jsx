import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignments] = useState([]);
  const [obtainmarks, setObtainmarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://study-hard-server.vercel.app/submission/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
  }, [id]);
  const handleMark = (e) => {
    e.preventDefault();
    if (!obtainmarks || !feedback) {
      setError("Marks and Feedback must be given");
      return;
    }
    const updatedSubmission = {
        obtainmarks,
      feedback,
      status: "completed",
    };
    axios
      .put(
        `https://study-hard-server.vercel.app/submission/${assignment._id}`,
        updatedSubmission,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: res.data.message || "Marks submitted successfully!",
          });
          navigate("/pending-assignments");
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Failed to submit Mark. Please try again.",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text:
            error.response?.data?.message ||
            "An unexpected error occurred. Please try again later.",
        });
      });
  };
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[120px] md:mt-[160px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-4xl font-bold">Mark Assignment</h2>
        <div className="mt-[30px] md:mt-[60px]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Google Docs Link:</h3>
            <a
              href={assignment.googledoc}
              target="_blank"
              rel="noopener noreferrer"
            >
              {assignment.googledoc}
            </a>
          </div>
          <div>
            <label className="label">Quick Note</label>
            <input
              type="text"
              value={assignment?.note || ""}
              readOnly
              className="input w-full input-bordered"
            />
          </div>
          <form onSubmit={handleMark}>
            <div className="mb-4">
              <label
                htmlFor="marks"
                className="block text-sm font-medium text-gray-700"
              >
                Marks
              </label>
              <input
                type="number"
                id="obtainmarks"
                value={obtainmarks}
                onChange={(e) => setObtainmarks(e.target.value)}
                className="input input-bordered w-full mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="textarea textarea-bordered w-full mt-2"
                required
              />
            </div>

            <button type="submit" className="btn bg-[#B9FF66] ">
              Submit Marks
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiveMarks;
