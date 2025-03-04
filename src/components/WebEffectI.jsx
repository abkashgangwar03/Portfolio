import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const AnimatedText = () => {
  return (
    <div className=" flex justify-center">
    <div className="relative flex justify-center items-center h-full w-fit bg-black overflow-hidden">
      {/* Container for animation sync */}
      <div className="relative inline-block">
        {/* Text with Outline (Initially Visible, Disappears on Fill) */}
        <motion.h3
          className="text-2xl font-bold text-transparent relative"
          style={{ WebkitTextStroke: "1px #162A35" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          Web Development
        </motion.h3>
        
        {/* Filling effect synchronized with line */}
        <motion.h3
          className="text-2xl font-bold text-textcolor absolute top-0 left-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 2.7, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          Web Development
        </motion.h3>
      </div>
      
      {/* Vertical Line synchronized with text fill, starting from text position */}
      <motion.div
        className="absolute top-0 h-[60px] w-[4px] bg-textcolor"
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 2.7, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        style={{ left: "40%" }}
      />
    </div>
    </div>
  );
};

export default AnimatedText;