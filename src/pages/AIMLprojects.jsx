import { motion } from 'framer-motion';
import React from 'react'


const AIMLprojects = () => {
    const webProjects = [
        {
          name: "Learning Management System",
          description:
            "A Learning Management System (LMS) is a web-based platform designed for online education and training. It enables instructors to create and manage courses, students to enroll and track progress, and admins to oversee user activities. Key features include course management, quizzes, progress tracking, discussion forums, and secure payments",
          image: "https://res.cloudinary.com/doqvfsc67/image/upload/v1741107837/Screenshot_25_qkmzgj.png",
          tech: ["HTML", "CSS", "JavaScript", "MongoDb"],
        },
        {
          name: "Learning Management System",
          description:
            "A Learning Management System (LMS) is a web-based platform designed for online education and training. It enables instructors to create and manage courses, students to enroll and track progress, and admins to oversee user activities. Key features include course management, quizzes, progress tracking, discussion forums, and secure payments",
          image: "https://res.cloudinary.com/doqvfsc67/image/upload/v1741107837/Screenshot_25_qkmzgj.png",
          tech: ["HTML", "CSS", "JavaScript", "MongoDb"],
        },
        {
          name: "Learning Management System",
          description:
            "A Learning Management System (LMS) is a web-based platform designed for online education and training. It enables instructors to create and manage courses, students to enroll and track progress, and admins to oversee user activities. Key features include course management, quizzes, progress tracking, discussion forums, and secure payments",
          image: "https://res.cloudinary.com/doqvfsc67/image/upload/v1741107837/Screenshot_25_qkmzgj.png",
          tech: ["HTML", "CSS", "JavaScript", "MongoDb"],
        },
      ];
  return (
    <div><h3 className="text-xl text-center md:text-3xl font-bold brightness-150 text-neutral-500 mt-2 md:mt-7">
    Data Science and <span className="text-textcolor brightness-150">AI/ML Projects</span> 
  </h3> 
    <motion.div
    initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    className=" flex flex-col p-2 md:p-4 mt-7 gap-4 md:gap-10 ">
        {webProjects.map((elem, idx) => {
          return (
           
            
            <motion.a
              href="https://github.com/abkashgangwar03"
              rel="noreffer noopener"
              target="_blank"
              key={idx}
              className=" p-2 md:p-4 w-full h-54 gap-4 rounded-lg bg-neutral-950 brightness-150 flex flex-col md:flex-row  justify-between items-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg focus:scale-102 focus:shadow-xl active:scale-102 outline-1 outline-textcolor shadow-textcolor"
            >
              <img
                className=" object-contain h-40 w-66 rounded "
                alt="Project Picture"
                src={elem.image}
                decoding="async"
                data-nimg="1"
                loading="lazy"
              />
              <div className="flex flex-col md:gap-2">
                <h2 className=" text-md md:text-xl font-bold text-textcolor">
                  {elem.name}
                </h2>
                <p className=" text-neutral-500 max-w-2xl hidden sm:block ">
                  {elem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {elem.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-neutral-600 border border-textcolor bg-textcolor px-2  rounded hidden sm:block"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0  backdrop-blur-sm flex items-center justify-center rounded-lg">
                <span className="text-neutral-500 font-bold p-2 bg-textcolor rounded-lg text-sm">Project uploading soon</span>
              </div>
            </motion.a>
         
          );
        })}
      </motion.div>
      </div>
  )
}

export default AIMLprojects