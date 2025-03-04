import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser ,FaCode} from "react-icons/fa6";
import { LuFolderGit } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";





const Navigator = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    
    
    setTimeout(() => {
      setIsOpen(false);
    }, 1550);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };
    


    

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="absolute z-10">
      {!isOpen && (
        <div
          className="fixed left-1 top-1/2 transform -translate-y-1/2 h-18 md:h-26 w-1 bg-neutral-400 cursor-pointer rounded"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <>
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed z-10 left-[0px] top-1/4 rounded-r-lg"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="border border-l-0 border-websec text-neutral-400 rounded-md text-2xl flex flex-col items-center h-fit px-4 py-4 gap-6 shadow-md shadow-black">
                <a href="#home"><IoMdHome className="text-3xl hover:scale-110 transition-transform" /></a>
                <a href="#aboutMe"><FaUser className=" hover:scale-110 transition-transform" /></a>
                <a href="#technologies"><FaCode className=" hover:scale-110 transition-transform bg-neutral-400 text-black rounded p-0.5"/></a>
                <a href="#exp"><FaGraduationCap className=" hover:scale-110 transition-transform bg-neutral-400 text-black rounded p-0.5"/></a>

                <a href="#projects"><LuFolderGit className=" hover:scale-110 transition-transform bg-neutral-400 text-black rounded p-0.5" /></a>
                <a href="#contactMe"> <MdEmail /></a>
                <button
                  className="text-xl px-1 rounded border border-neutral-600 font-extrabold brightness-175 text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-textcolor hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Navigator;
