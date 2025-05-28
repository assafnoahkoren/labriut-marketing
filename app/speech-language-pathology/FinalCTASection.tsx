"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const trustVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Headline */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          מוכנים להתחיל?
          <span className="block">קבלו 20 שאלות חינם עכשיו</span>
        </motion.h2>
        
        {/* Supporting Text */}
        <motion.p 
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          התחילו את ההכנה שלכם לבחינת הסמכה היום עם גישה מיידית לאפליקציה המובילה
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          className="bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-2xl mb-6"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          התחל ניסיון חינם - 20 שאלות
        </motion.button>

        {/* Urgency Message */}
        <motion.p 
          className="text-blue-200 font-medium"
          variants={itemVariants}
        >
          התחילו היום והרגישו את ההבדל מחר
        </motion.p>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100"
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center justify-center gap-2"
            variants={trustVariants}
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>ללא כרטיס אשראי</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-2"
            variants={trustVariants}
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
            </svg>
            <span>גישה מיידית</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-2"
            variants={trustVariants}
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>מאובטח לחלוטין</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 