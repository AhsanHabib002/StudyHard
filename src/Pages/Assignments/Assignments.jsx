import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AsignmentCard from "../../Components/Cards/AsignmentCard";

const Assignments = () => {
  const assignments = useLoaderData();

  const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (assignments) {
        setLoading(false);
      }
    }, [assignments]);
  
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[60px]">
        <h2 className="text-2xl md:text-4xl font-bold">
          All Assignments: {assignments.length}
        </h2>
        {/* filter */}
        

        <div className="mt-[30px] md:mt-[60px]">
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {assignments.map((assignment) => (
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
