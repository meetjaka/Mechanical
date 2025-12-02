"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full glass hover:glow transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
          scale: theme === "dark" ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-5 h-5"
      >
        {theme === "light" ? (
          <Sun className="w-5 h-5 text-accent-orange transition-colors" />
        ) : (
          <Moon className="w-5 h-5 text-accent-blue transition-colors" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: theme === "light" 
            ? "radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(100, 255, 218, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: theme === "dark" ? [1, 1.2, 1] : [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}