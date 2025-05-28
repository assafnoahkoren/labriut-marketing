"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
          variants={itemVariants}
        >
          הכנה חכמה לבחינת הסמכה
          <span className="block text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
            בקלינאות תקשורת
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          תרגלו בכל מקום ובכל זמן עם סימולציות מציאותיות ומעקב התקדמות מתקדם
        </motion.p>
        
        {/* Call-to-action button */}
        <motion.button 
          className="bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:from-blue-700 hover:to-sky-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl mb-4"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          התחל ניסיון חינם - 20 שאלות
        </motion.button>
        
        {/* Supporting text */}
        <motion.p 
          className="text-sm text-slate-500 mb-16"
          variants={itemVariants}
        >
          ללא כרטיס אשראי • התחילו תוך דקה
        </motion.p>
        
        {/* Decorative element */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
} 