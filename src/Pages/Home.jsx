import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/mainimage.png"

const Home = () => {
  return (
    <div>
        {/* Hero section */}
      <div className="pl-[90px] grid grid-cols-1 gap-[30px] md:grid-cols-2 items-center">
        {/* Hero content */}
        <div className="flex flex-col gap-5 md:gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Unlock Your Academic Potential with studyHard
          </h1>
          <p>
            Effortlessly create and submit assignments, track your progress, and
            compete with fellow students on a platform designed to maximize your
            learning and boost your grades.
          </p>
          <Link to="/"><button className="btn text-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23]">View Assignments</button></Link>
        </div>
        {/* Hero Image */}
        <div>
            <img className="w-full object-cover shadow-lg" src={heroimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
