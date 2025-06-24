
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const InteractiveAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        // Calculate rotation based on mouse position relative to avatar
        const rotateY = (deltaX / window.innerWidth) * 30; // Max 30 degrees
        const rotateX = -(deltaY / window.innerHeight) * 20; // Max 20 degrees
        
        setRotation({ rotateX, rotateY });
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Avatar container */}
      <motion.div
        ref={avatarRef}
        className="relative z-10 perspective-1000"
        animate={{
          rotateX: rotation.rotateX,
          rotateY: rotation.rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* 3D Avatar Image */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 backdrop-blur-sm">
          <img
            src="/lovable-uploads/2e3b3313-0edc-4054-a8a9-71b7a98e3618.png"
            alt="Isham K. Mansoor - 3D Avatar"
            className="w-full h-full object-cover transform-gpu"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
            }}
          />
          
          {/* Interactive overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50"></div>
        </div>
        
        {/* Floating elements around avatar - scaled for mobile */}
        <motion.div
          className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full shadow-lg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full shadow-lg"
          animate={{
            y: [0, -8, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-secondary border-2 border-accent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default InteractiveAvatar;
