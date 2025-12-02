"use client";

import { motion } from "framer-motion";

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-glass-bg rounded w-3/4"></div>
      <div className="h-4 bg-glass-bg rounded w-1/2"></div>
      <div className="h-4 bg-glass-bg rounded w-5/6"></div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated logo/icon */}
        <motion.div
          className="w-20 h-20 mx-auto border-4 border-accent-blue border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-electric bg-clip-text text-transparent">
            Loading Excellence...
          </h2>
          <p className="text-foreground-muted mt-2">
            Mechanical Engineering Department
          </p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="glass p-6 rounded-2xl animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-glass-bg rounded-xl"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-glass-bg rounded w-3/4"></div>
          <div className="h-3 bg-glass-bg rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}