"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimateOnScroll({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  distance = 30,
  className = "",
  ...props 
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      animate={inView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className = "",
  ...props 
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className={className}
      {...props}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * staggerDelay,
                ease: "easeOut"
              }}
            >
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
}

export function ParallaxContainer({ children, offset = 50, className = "" }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: inView ? 0 : offset,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}