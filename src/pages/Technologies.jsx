import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaPython, FaJava, FaCss3Alt } from "react-icons/fa6";
import {
  SiFlutter,
  SiJavascript,
  SiFirebase,
  SiDart,
  SiTailwindcss,
} from "react-icons/si";
import BackendEff from "../components/BackendEff";
import WebEffectI from '../components/WebEffectI'
import AndEffect from '../components/AndEffect'

const Technologies = () => {
  const techCategories = [
    {
      title: <WebEffectI />,
      technologies: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiTailwindcss className="text-teal-500" />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiJavascript className="text-yellow-500" />,
          name: "JavaScript",
        },
        { icon: <FaReact className="text-blue-500" />, name: "React" },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
      ],
    },
    {
      title: <AndEffect/>,
      technologies: [
        { icon: <SiDart className="text-blue-700" />, name: "Dart" },
        { icon: <SiFlutter className="text-blue-400" />, name: "Flutter" },
        { icon: <FaReact className="text-blue-400" />, name: "React Native" },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
      ],
    },
    {
      title: <BackendEff/>,
      technologies: [
        { icon: <FaJava className="text-red-500" />, name: "Java" },
        { icon: <FaPython className="text-blue-400" />, name: "Python" },
      ],
    },
  ];

  return (
    <div id="technologies" className="h-full w-full scroll-mt-12 md:scroll-mt-0">
      <h1
        className="text-start mt-7 md:mt-5 mx-4 md:mx-10 p-2 border-b-2 border-neutral-600 text-2xl font-extrabold md:text-4xl 
        bg-gradient-to-r brightness-175 from-neutral-600 to-textcolor to-30% md:to-12% text-transparent bg-clip-text"
      >
        Technologies
      </h1>

      <div className="w-full max-w-6xl mx-auto mt-14 md:mt-20 space-y-8  flex flex-col justify-center items-center">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full text-center"
          >
            <div className="text-xl md:text-2xl font-bold brightness-175 text-center text-textcolor mb-6 md:mb-9">
              {category.title}
            </div>

            <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 md:space-x-5">
              {category.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -30, 0, 30, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: idx * 0.15,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center justify-center text-2xl p-2 rounded-lg bg-neutral-950 brightness-150 shadow-sm 
                  hover:shadow-lg shadow-textcolor transition-all duration-300 ease-in-out border border-gray-700 hover:border-textcolor w-20 h-20"
                >
                  {tech.icon}
                  <p className="text-xs font-semibold mt-1 text-gray-300 text-center">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
