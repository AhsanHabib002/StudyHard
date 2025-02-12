import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AsignmentCard from "../../Components/Cards/AsignmentCard";
import Select from "react-select";
import axios from "axios";

const Assignments = () => {
  const assignments = useLoaderData();
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);
  const [loading, setLoading] = useState(true);

  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const handleDifficultyChange = async (selectedOption) => {
    const difficulty = selectedOption?.value || "";
    try {
      const response = await axios.get(
        `https://study-hard-server.vercel.app/assignments?difficulty=${difficulty}`,
        { withCredentials: true }
      );
      
      setFilteredAssignments(response.data);
    } catch (error) {
      console.error("Error fetching filtered assignments:", error);
    }
  };

  useEffect(() => {
    if (assignments) {
      setFilteredAssignments(assignments);
      setLoading(false);
    }
  }, [assignments]);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[120px] md:mt-[160px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-4xl font-bold">
          All Assignments: {assignments.length}
        </h2>
        {/* filter */}

        <div className="mt-[30px] md:mt-[60px]">
          <Select
            options={difficultyOptions}
            onChange={handleDifficultyChange}
            placeholder="Filter by Difficulty"
            className="mb-[20px] w-full md:w-[300px]"
          />
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredAssignments.map((assignment) => (
              <AsignmentCard
                key={assignment._id}
                assignment={assignment}
              ></AsignmentCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
