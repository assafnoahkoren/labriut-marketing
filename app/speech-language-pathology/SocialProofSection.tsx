"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </motion.span>
  );
}

export default function SocialProofSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            הצטרפו ל-300+ בוגרים שכבר עברו את הבחינה
          </h2>
          <p className="text-xl text-slate-600">
            תוצאות מוכחות שמדברות בעד עצמן
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
            variants={statVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              <AnimatedNumber value={300} suffix="+" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">בוגרים הצליחו</div>
            <div className="text-slate-600">סטודנטים עברו את בחינת הסמכה</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
            variants={statVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <AnimatedNumber value={200} suffix="K+" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">שאלות נפתרו</div>
            <div className="text-slate-600">שאלות תרגול הושלמו באפליקציה</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100"
            variants={statVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              <AnimatedNumber value={10} suffix="K+" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">סימולציות</div>
            <div className="text-slate-600">בחינות מלאות הושלמו במערכת</div>
          </motion.div>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <svg className="w-12 h-12 text-blue-200 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
            </motion.div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "הודות לאפליקציה הרגשתי הרבה יותר בטוחה בבחינה. המעקב אחרי ההתקדמות עזר לי לדעת בדיוק על מה להתמקד."
            </blockquote>
            <div className="text-blue-100">
              <div className="font-semibold">שרה כהן</div>
              <div className="text-sm">בוגרת שעברה את הבחינה</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 