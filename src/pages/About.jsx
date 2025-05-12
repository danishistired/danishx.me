import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMobile,
  FaPlug,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import {
  
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiPython,
  SiDart,
  SiFlutter,
  SiRender,
  SiOpencv,
  SiFlask,
} from "react-icons/si";
import Photo from "../assets/danish.jpg";

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Dart", icon: SiDart},
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React.js", icon: SiReact },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Responsiveness", icon: FaMobile },
      { name: "RESTful API ", icon: FaPlug },
      
    ],
  },
  {
    title: "Backend Development & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful API ", icon: FaCode },
      { name: "Authentication ", icon: FaShieldAlt },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Databases & State Management",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "Mongoose", icon: FaDatabase },
    ],
  },
  {
    title: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Testing, Debugging & Deployment",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Chrome Tools", icon: FaCode },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Hostinger", icon: FaServer },
      { name: "Render", icon: SiRender },
    ],
  },
];

const About = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state of the clicked section
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl py-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Column - About Section */}
        <div className="flex-1">
          <div className="flex justify-center mb-6">
            <img
              className="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-teal-500 shadow-md"
              src={Photo}
              alt="Manish Kumar"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">Danish Verma</h1>
            <h4 className="text-lg text-gray-300 mb-6">
              App Developer | C++ Programmer 
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              when i was 12, more often than not, i found myself wanting a console.
              although i never got one, my father did bring me a laptop once. the laptop broke 
              before i did anything productive with it, but it did hook me to computers. 
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              i loved the weekly computer lab lectures we had back at my school and when covid hit,
              i started learning python for real. jee was a huge break for me but since joining college
              i have aimed at making great open source solutions to make life easier for people.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm excited to contribute my skills and creativity to projects that
              make a difference. Let's connect and explore how we can work
              together to bring innovative ideas to life!
            </p>
          </div>

          <div className="flex justify-center space-x-6 text-2xl mt-6">
  
            <a
              href="https://x.com/danishistired"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-300 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/danish--verma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-300 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Column - Skills Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {skillsCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <div
                  className="flex items-center justify-between cursor-pointer p-3  border border-white/10 rounded-lg hover:bg-[#2a2a2a] transition-all"
                  onClick={() => toggleSection(index)}
                >
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                  <FiChevronDown
                    className={`transition-transform ${
                      openSections[index] ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Animated skills grid */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: openSections[index] ? "500px" : "0px",
                    marginTop: openSections[index] ? "1rem" : "0",
                  }}
                >
                  <div
                    className={`grid grid-cols-2 sm:grid-cols-3 gap-3 border border-white/10 p-4 rounded-xl transition-all duration-500 ease-in-out ${openSections[index] ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-center border rounded-lg p-3 space-x-2 hover:bg-[#1a1a1a] hover:scale-105 transition-all cursor-pointer"
                      >
                        {skill.icon ? (
                          <skill.icon className="text-xl" />
                        ) : (
                          <FaCode className="text-xl" />
                        )}
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
