import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Animation = () => {
 
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  
  const rotate = useTransform(x, [0, window.innerWidth], [-45, 45]);
  const scale = useTransform(y, [0, window.innerHeight], [0.8, 1.2]);

 
  const handlePointerMove = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  return (
    <motion.div
      style={{
        width: '100%',
        height: '25vh', 
        background: 'linear-gradient(135deg, #000, #162A35)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPointerMove={handlePointerMove}
    >
      {/* Dynamic shapes */}
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#162A35',
          borderRadius: '20%',
          position: 'absolute',
          rotate: rotate, // Rotate with pointer
          scale: scale, // Scale with pointer
        }}
        animate={{
          borderRadius: ['20%', '50%', '20%'], // Morph between circle and square
          rotate: [0, 180, 360], // Continuous rotation
          backgroundColor: ['#162A35', '#000', '#162A35'], // Color shift
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Additional shapes for depth */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: `${50 + index * 30}px`,
            height: `${50 + index * 30}px`,
            backgroundColor: 'transparent',
            border: `2px solid ${index % 2 === 0 ? '#162A35' : '#fff'}`,
            borderRadius: `${index % 2 === 0 ? '50%' : '10%'}`,
            position: 'absolute',
            rotate: rotate, 
            scale: scale, 
          }}
          animate={{
            rotate: [0, 180, 360], // Continuous rotation
            scale: [1, 1.2, 1], // Pulsating effect
          }}
          transition={{
            duration: 5 + index * 2, // Staggered duration
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};

export default Animation;