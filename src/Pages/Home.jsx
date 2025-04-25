import { Link } from "react-router-dom";
import heroimage from "../assets/mainimage.png";
import assignmentImage from "../assets/assignment-cta.png";
import contactimage from "../assets/contact-image.png";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";

const Home = () => {
  return (
    <div className="pt-[120px] md:pt-[160px]">
      {/* Hero section */}
      <div className="pl-[30px] md:pl-[90px] grid grid-cols-1 gap-[30px] md:grid-cols-2 items-center">
        <div className="flex flex-col gap-5 md:gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Unlock Your Academic Potential with studyHard
          </h1>
          <p>
            Effortlessly create and submit assignments, track your progress, and
            compete with fellow students on a platform designed to maximize your
            learning and boost your grades.
          </p>
          <Link to="/assignments">
            <button className="btn text-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23]">
              View Assignments
            </button>
          </Link>
        </div>
        <div>
          <img className="w-full object-cover shadow-lg" src={heroimage} alt="" />
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div className="flex flex-col gap-[30px] md:flex-row items-start md:items-end">
            <h2 className="text-2xl md:text-4xl font-bold">
              Boost Your <span className="text-[#a9f027]">Learning</span> with Powerful Features
            </h2>
            <p>
              "StudyHard" equips you with a suite of tools to enhance your
              learning journey and achieve academic success.
            </p>
          </div>
          {/* Features cards */}
          <div className="mt-[30px] md:mt-[90px] grid grid-cols-1 gap-[30px] md:grid-cols-2">
            {/* Feature Cards... same as above code */}
            {/* Card 1, 2, 3, 4... already listed in previous code */}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <h2 className="text-2xl md:text-4xl font-bold">
            Benefits by Joining <span className="text-[#a9f027]">StudyHard</span>
          </h2>
          <div className="mt-[30px] md:mt-[90px]">
            <div className="bg-[#191A23] rounded-[45px] px-[30px] py-[30px] md:px-[60px] md:py-[70px]">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
                <div className="text-white flex flex-col gap-[30px]">
                  <h3 className="text-[20px] md:text-[22px] font-semibold">
                    Improved Learning & Collaboration
                  </h3>
                  <p>
                    Students can create, submit, and review assignments, gaining
                    insights from peer evaluations while enhancing their
                    problem-solving skills.
                  </p>
                </div>
                <div className="text-white flex flex-col gap-[30px] border-l-2 border-white pl-[10px]">
                  <h3 className="text-[20px] md:text-[22px] font-semibold">
                    Secure & Private Workspace
                  </h3>
                  <p>
                    With JWT-based authentication, students can safely manage
                    their assignments, ensuring only authorized access to their
                    academic progress.
                  </p>
                </div>
                <div className="text-white flex flex-col gap-[30px] border-l-2 border-white pl-[10px]">
                  <h3 className="text-[20px] md:text-[22px] font-semibold">
                    Enhanced User Experience
                  </h3>
                  <p>
                    The platform offers a seamless, responsive design with
                    dark/light mode options, making learning accessible on any
                    device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action or Team Showcase */}
      <div className="max-w-[90rem] mx-auto px-[30px] md:px-[90px] mt-[120px]">
        <div className="bg-[#B9FF66] rounded-[45px] flex flex-col md:flex-row items-center justify-between p-[30px] md:p-[60px] gap-[30px]">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-[#191A23] mb-4">
              Ready to take your studies to the next level?
            </h2>
            <p className="mb-6">
              Join thousands of students already boosting their grades with StudyHard.
            </p>
            <Link to="/signup">
              <button className="btn text-white bg-[#191A23] hover:bg-white hover:text-[#191A23] border border-[#191A23]">
                Get Started
              </button>
            </Link>
          </div>
          <img src={assignmentImage} alt="cta" className="w-full md:max-w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
