"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  decimals = 0, 
  suffix = "", 
  prefix = "",
  className = "text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-electric bg-clip-text text-transparent"
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          suffix={suffix}
          prefix={prefix}
        />
      )}
    </div>
  );
}

export function ProgressRing({ 
  progress, 
  size = 120, 
  strokeWidth = 8,
  color = "var(--accent-blue)",
  bgColor = "rgba(100, 255, 218, 0.1)",
  animated = true
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = animated 
    ? (inView ? circumference - (progress / 100) * circumference : circumference)
    : circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
        />
      </svg>
      
      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-foreground">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

export function FloatingElements() {
  const shapes = [
    { 
      id: 1, 
      size: 60, 
      initialX: "10%", 
      initialY: "20%",
      color: "var(--accent-blue)",
      shape: "circle"
    },
    { 
      id: 2, 
      size: 40, 
      initialX: "80%", 
      initialY: "15%",
      color: "var(--accent-electric)",
      shape: "triangle"
    },
    { 
      id: 3, 
      size: 50, 
      initialX: "15%", 
      initialY: "70%",
      color: "var(--accent-orange)",
      shape: "square"
    },
    { 
      id: 4, 
      size: 35, 
      initialX: "85%", 
      initialY: "75%",
      color: "var(--metallic)",
      shape: "hexagon"
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-5"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + shape.id * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.shape === "circle" && (
            <div 
              className="w-full h-full rounded-full border-2"
              style={{ borderColor: shape.color }}
            />
          )}
          {shape.shape === "triangle" && (
            <div 
              className="w-full h-full border-2"
              style={{ 
                borderColor: shape.color,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
              }}
            />
          )}
          {shape.shape === "square" && (
            <div 
              className="w-full h-full border-2 rotate-45"
              style={{ borderColor: shape.color }}
            />
          )}
          {shape.shape === "hexagon" && (
            <div 
              className="w-full h-full border-2"
              style={{ 
                borderColor: shape.color,
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function MagneticButton({ 
  children, 
  className = "",
  intensity = 0.3,
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * intensity;
    const y = (e.clientY - rect.top - rect.height / 2) * intensity;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-electric/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovering ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {children}
    </motion.button>
  );
}