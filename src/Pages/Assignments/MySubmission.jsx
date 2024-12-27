import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const MySubmission = () => {
  const { user } = useAuth();
  const [submission, setSubmission] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://study-hard-server.vercel.app/mysubmission?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setSubmission(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user.email]);
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-4xl font-bold mb-[30px] md:mb-[60px]">
          My Submissions: {submission.length}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">Loading...</p>
          </div>
        ) : submission.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-2xl">
              No submissions found. Submit an assignment to view it here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-sm md:text-base">
                  <th className="px-4 py-2 border">Assignment Title</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Marks</th>
                  <th className="px-4 py-2 border">Your Marks</th>
                  <th className="px-4 py-2 border">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {submission.map((submit, index) => (
                  <tr
                    key={index}
                    className="text-sm md:text-base"
                  >
                    <td className="px-4 py-2 border">{submit.title}</td>
                    <td className="px-4 py-2 border">{submit.status}</td>
                    <td className="px-4 py-2 border">
                      {submit.marks || "N/A"}
                    </td>
                    <td className="px-4 py-2 border">
                      {submit.obtainedMarks || "N/A"}
                    </td>
                    <td className="px-4 py-2 border">
                      {submit.feedback || "No feedback yet"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySubmission;
