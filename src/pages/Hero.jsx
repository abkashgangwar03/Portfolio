import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "../components/Typewriter";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 1550);
    const textTimer = setTimeout(() => setShowText(true), 900); // Show "Namaste" when hands meet
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section id="home" className="h-screen relative">
      <video
        className="object-cover brightness-[40%] h-[100vh] blur-[1px] w-full"
        src="https://res.cloudinary.com/doqvfsc67/video/upload/v1738092733/cjlrrqomyd8rewds6ktp.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      {showAnimation && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md pointer-events-none transition-all duration-500"></div>
      )}


      <div className="absolute top-0 w-full h-[80vh] flex flex-col justify-center items-center">
        {/* Namaste Animation */}
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center absolute z-10"
            >
              {/* Namaste Hands Animation */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <motion.img
                  src="/pic/left.png" // Left hand PNG
                  alt="Left Hand"
                  className="w-20 h-20 absolute brightness-60"
                  initial={{ x: -150, y: 100, rotate: 10, opacity: 0 }}
                  animate={{ x: -14, y: 0, rotate: -7, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.img
                  src="public/pic/—Pngtree—stop hand gesture vector_5374169.png" // Right hand PNG
                  alt="Right Hand"
                  className="w-20 h-20 absolute brightness-60"
                  initial={{ x: 150, y: 100, rotate: -10, opacity: 0 }}
                  animate={{ x: 14, y: 0, rotate: 7, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
              {showText && (
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="text-3xl md:text-4xl font-extrabold text-neutral-400"
                >
                  Namaste!
                </motion.h1>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Text (Always in Position) */}
        <div className="text-center mt-5 absolute z-0 w-full flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showAnimation ? 0 : 1 }}
            transition={{ duration: 0.8 }}
            className="md:text-[40px] text-[20px] brightness-175 font-extrabold text-neutral-600"
          >
            Hi, I'm
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showAnimation ? 0 : 1 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold w-fit text-4xl md:text-6xl brightness-175 text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-textcolor"
          >
            Abkash
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showAnimation ? 0 : 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typewriter />
            <p className="text-neutral-400 font-serif mt-7 font-bold text-lg w-[85vw] lg:w-[70vw] md:w-[80vw]">
              Welcome! Let's make an impact in the community together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
