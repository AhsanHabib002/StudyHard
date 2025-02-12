import { Link } from "react-router-dom";
import heroimage from "../assets/mainimage.png";
import assignmentImage from "../assets/assignment-cta.png";
import contactimage from "../assets/contact-image.png";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";

const Home = () => {
  return (
    <div className="pt-[60px] md:pt-[120px]">
      {/* Hero section */}
      <div className="pl-[30px] md:pl-[90px] grid grid-cols-1 gap-[30px] md:grid-cols-2 items-center">
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
          <Link to="/">
            <button className="btn text-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23]">
              View Assignments
            </button>
          </Link>
        </div>
        {/* Hero Image */}
        <div>
          <img
            className="w-full object-cover shadow-lg"
            src={heroimage}
            alt=""
          />
        </div>
      </div>
      {/* Features */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          {/* Features Head */}
          <div className="flex flex-col gap-[30px] md:flex-row items-start md:items-end">
            <h2 className="text-2xl md:text-4xl font-bold">
              Boost Your <span className="text-[#a9f027]">Learning</span> with
              Powerful Features
            </h2>
            <p>
              "StudyHard" equips you with a suite of tools to enhance your
              learning journey and achieve academic success.
            </p>
          </div>
          {/* Features card */}
          <div className="mt-[30px] md:mt-[90px] grid grid-cols-1 gap-[30px] md:grid-cols-2">
            {/* card-1 */}
            <div className="bg-[#F3F3F3] border border-black border-b-2 rounded-[45px] p-[30px]">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[20px]  md:text-[22px] font-semibold">
                  Personalized Learning Paths
                </h3>
                <p>
                  Create custom study plans tailored to your individual learning
                  style, pace, and academic goals.
                </p>
                <div className="flex items-center gap-[15px] mt-[15px]">
                  <div className="rounded-full p-3 bg-[#191A23]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="#B9FF66"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Learn more</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="bg-[#B9FF66] border border-black border-b-2 rounded-[45px] p-[30px]">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[20px]  md:text-[22px] font-semibold">
                  Interactive Assignments & Quizzes
                </h3>
                <p>
                  Engage with interactive assignments, quizzes, and exercises
                  that make learning fun and effective.
                </p>
                <div className="flex items-center gap-[15px] mt-[15px]">
                  <div className="rounded-full p-3 bg-[#191A23]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="#B9FF66"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Learn more</p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="bg-[#191A23] border border-black border-b-2 rounded-[45px] p-[30px]">
              <div className="flex flex-col gap-[15px] text-white">
                <h3 className="text-[20px]  md:text-[22px] font-semibold">
                  Collaborative Learning Spaces
                </h3>
                <p>
                  Connect with fellow students, collaborate on projects, and
                  learn from each other in a supportive community.
                </p>
                <div className="flex items-center gap-[15px] mt-[15px]">
                  <div className="rounded-full p-3 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Learn more</p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="bg-[#F3F3F3] border border-black border-b-2 rounded-[45px] p-[30px]">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[20px]  md:text-[22px] font-semibold">
                  Gamified Learning Experience
                </h3>
                <p>
                  Earn points, unlock achievements, and compete in friendly
                  challenges to stay motivated and engaged.
                </p>
                <div className="flex items-center gap-[15px] mt-[15px]">
                  <div className="rounded-full p-3 bg-[#191A23]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="#B9FF66"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div >
            <h2 className="text-2xl md:text-4xl font-bold">
              Benefits by Joining{" "}
              <span className="text-[#a9f027]">StudyHard</span>
            </h2>
          </div>
          <div className="mt-[30px] md:mt-[90px]">
            <div className="bg-[#191A23] rounded-[45px] px-[30px] py-[30px] md:px-[60px] md:py-[70px]">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
                <div className="text-white flex flex-col gap-[30px]">
                  <h3 className="text-[20px]  md:text-[22px] font-semibold ">
                    Improved Learning & Collaboration
                  </h3>
                  <p>
                    Students can create, submit, and review assignments, gaining
                    insights from peer evaluations while enhancing their
                    problem-solving skills.
                  </p>
                </div>
                <div className="text-white flex flex-col gap-[30px] border-l-2 border-white pl-[10px]">
                  <h3 className="text-[20px]  md:text-[22px] font-semibold ">
                    Secure & Private Workspace
                  </h3>
                  <p>
                    With JWT-based authentication, students can safely manage
                    their assignments, ensuring only authorized access to their
                    academic progress.
                  </p>
                </div>
                <div className="text-white flex flex-col gap-[30px] border-l-2 border-white pl-[10px]">
                  <h3 className="text-[20px]  md:text-[22px] font-semibold ">
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
      {/* Team */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Team Who build <span className="text-[#a9f027]">StudyHard</span>
            </h2>
          </div>

          <div className="mt-[30px] md:mt-[90px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-[#F3F3F3] border border-black border-b-2 rounded-[45px] p-[30px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px] items-end">
                  <div >
                    <img src={team1} alt="" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[20px]">John Smith</h3>
                    <p>CEO & Founder</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                </div>
              </div>

              <div className="bg-[#F3F3F3] border border-black border-b-2 rounded-[45px] p-[30px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px] items-end">
                  <div >
                    <img src={team2} alt="" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[20px]">Jane Doe</h3>
                    <p>Director of Operations</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
                </div>
              </div>

              <div className="bg-[#F3F3F3] border border-black border-b-2 rounded-[45px] p-[30px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px] items-end">
                  <div >
                    <img src={team3} alt="" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[20px]">Michael Brown</h3>
                    <p>Senior SEO Specialist</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <p>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* create assignment CTA */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div className="rounded-[45px] bg-[#F3F3F3] p-[30px] md:p-[60p] flex flex-col md:flex-row justify-end items-center md:items-center">
            {/* cta content */}
            <div className="flex flex-1 flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Take Control of Your Learning: Create Assignments Today!
              </h2>
              <p>
                Ready to dive deeper into a specific topic? Want to practice for
                an upcoming exam? Create custom assignments on "studyHard" to
                reinforce your learning and track your progress.
              </p>
              <Link to="/">
                <button className="btn text-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23]">
                  Create Assignments
                </button>
              </Link>
            </div>
            {/* cta image */}
            <div className="flex-1 flex justify-end">
              <img src={assignmentImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Faq */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">
              Frequently Ask Questions
            </h2>
            <div className="mt-[60px] flex flex-col gap-[15px]">
              <div className="collapse collapse-plus bg-base-200 border border-black border-1 border-b-[4px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How can I create an account on studyHard?
                </div>
                <div className="collapse-content">
                  <p>
                    Creating an account is easy! Simply visit our website and
                    click on the "Sign Up" or "Register" button. Follow the
                    on-screen instructions to provide the necessary information
                    and create your account.
                  </p>
                </div>
              </div>
              {/* faq2 */}
              <div className="collapse collapse-plus bg-base-200 border border-black border-1 border-b-[4px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What types of assignments can I create on studyHard?
                </div>
                <div className="collapse-content">
                  <p>
                    You can create a wide variety of assignments, including
                    essays, quizzes, practice problems, research papers,
                    presentations, and more. The platform offers flexibility to
                    adapt to your specific learning needs.
                  </p>
                </div>
              </div>
              {/* faq3 */}
              <div className="collapse collapse-plus bg-base-200 border border-black border-1 border-b-[4px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Is studyHard free to use?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer a free plan with basic features. For access to
                    premium features such as personalized learning paths and
                    advanced analytics, we offer subscription options.
                  </p>
                </div>
              </div>
              {/* faq4 */}
              <div className="collapse collapse-plus bg-base-200 border border-black border-1 border-b-[4px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How can I track my progress on studyHard?
                </div>
                <div className="collapse-content">
                  <p>
                    StudyHard provides detailed progress tracking tools. You can
                    monitor your performance on assignments, track your learning
                    history, and identify areas for improvement.
                  </p>
                </div>
              </div>
              {/* faq5 */}
              <div className="collapse collapse-plus bg-base-200 border border-black border-1 border-b-[4px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How does the collaborative learning feature work?
                </div>
                <div className="collapse-content">
                  <p>
                    Our collaborative learning spaces allow you to connect with
                    other students, share resources, discuss topics, and work
                    together on group projects. This fosters a supportive
                    learning environment and enhances your learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info */}
      <div className="max-w-[90rem] mx-auto">
        <div className="mt-[60px] md:mt-[120px] px-[30px] md:px-[90px]">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">
              Still Have a Question?
            </h2>
          </div>
          <div className="rounded-t-[45px] bg-[#F3F3F3] mt-[30px] md:mt-[90px] py-[30px] md:py-[60px] md:pl-[60px]">
            <div className="flex flex-col md:flex-row justify-end">
              {/* form Content */}
              <div className="flex-1">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      placeholder="Write your questions.."
                      className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#B9FF66]">Submit</button>
                  </div>
                </form>
              </div>
              {/* form image */}
              <div className="flex-1 flex justify-end">
                <img className="max-h-[450px]" src={contactimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
