import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiCplusplus,
  SiFlutter,
  SiLinux,
  SiPython,
} from "react-icons/si";
import Socialicons from "./Socialicons";
import TextChange from "./TextChange";
import { GrWorkshop } from "react-icons/gr";

const Hero = () => {
  const headingRef = useRef(null);
  const skills = [
    { icon: SiFlutter, name: "Flutter" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiPython, name: "Python" },
    { icon: SiNodedotjs, name: "Node.JS" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiTailwindcss, name: "Tailwind" },
  ];

  useEffect(() => {
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll('.char');
      
      gsap.set(chars, {
        y: 150,
        opacity: 0
      });

      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.2
      });
    }
  }, []);

  // Split the name into individual characters
  const name = "D A N I S H".split('');

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-10 md:p-20 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[1800px] mx-auto">
        <div className="text-center w-full">
          <h1
            ref={headingRef}
            className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 overflow-hidden"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {name.map((char, index) => (
              <span key={index} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          
          {/* Rest of your component remains the same */}
          <div className="font-bold text-[28px] sm:text-[36px] mt-8">
            I'm <TextChange />
          </div>

          <p className="text-gray-200 leading-relaxed mt-4 max-w-3xl mx-auto">
            I turn concepts into code, problems into solutions, and ideas into reality. 
          </p>

          {/* Skills Section */}
          <div className="my-8 w-full px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border border-[#00AEEF] rounded-lg px-1 sm:px-3 py-2.5 space-x-2 hover:bg-[#010101] hover:scale-105 transition-colors"
                >
                  <skill.icon className="text-xl md:text-2xl" />
                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <Socialicons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;