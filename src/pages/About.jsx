import { div } from "framer-motion/client";
import React from "react";

const About = () => {
  return (
    <section id="aboutMe"
     className="h-full lg:h-screen  w-auto mx-4 md:mx-10 scroll-mt-12 md:scroll-mt-0 ">
      <h1
        className="text-start border-b-2 mt-5 border-neutral-600 text-2xl md:text-4xl font-extrabold
        p-4 bg-gradient-to-r brightness-175 from-neutral-600 to-textcolor to-30% md:to-10% text-transparent bg-clip-text"
      >
        About Me
      </h1>

      <div className=" h-full lg:h-[80vh] pt-10 md:pt-15 flex flex-col-reverse items-center justify-center md:flex-row gap-7 md:gap-22 lg:gap-46">
        <p className="text-neutral-500 brightness-150 md:max-w-2xl text-md md:text-lg font-extralight font-serif bg-neutral-950 pt-4 px-1 md:p-4 rounded-lg md:rounded-3xl md:outline-1 shadow-md shadow-textcolor outline-textcolor text-justify leading-relaxed">
          I'm a Computer Science Engineer passionate about web and mobile app development, Data Science, and AI/ML.
          <br />
          <br />
          Currently interning in mobile development, I specialize in building
          scalable and high-performance applications using Flutter, React
          Native, Dart, and Firebase. I also have expertise in React,
          JavaScript, and Python, focusing on developing efficient, interactive,
          and user-friendly solutions.
          <br />
          <br />
          My strong interest in AI/ML drives me to explore machine learning,
          data analytics, and AI-powered applications to solve real-world
          problems. I thrive on continuous learning, tackling complex
          challenges, and staying updated with the latest technologies to build
          innovative and impactful solutions.
          <br />
          <br />
          Let’s connect and create something amazing! 🚀
        </p>

        <img
          className=" rounded-full brightness-80 border outline-1 outline-textcolor shadow-lg shadow-textcolor"
          src="https://res.cloudinary.com/doqvfsc67/image/upload/v1741107837/mypic_hhmf4i.jpg"
          alt="My pic"
          width="280"
        />
      </div>
    </section>
  );
};

export default About;
