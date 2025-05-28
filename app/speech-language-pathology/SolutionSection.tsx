"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section className="py-24 bg-gradient-to-br from-blue-50 to-sky-50">
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
            הפתרון: תרגול חכם ונוח שמתאים לכם
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            שלוש יכולות מרכזיות שיעזרו לכם לעבור את בחינת הסמכה בביטחון
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Feature 1: Mobile Practice */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">תרגול בכל מקום</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                תרגלו בדרך לעבודה, בהפסקות, או בבית
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                האפליקציה עובדת על הטלפון שלכם
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                אין צורך בחוברות או מחשב
              </li>
            </ul>
          </motion.div>

          {/* Feature 2: Progress Tracking */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">מעקב התקדמות</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                ראו בדיוק באילו נושאים אתם חזקים
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                זהו נקודות חולשה שצריכות חיזוק
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                עקבו אחרי השיפור שלכם לאורך זמן
              </li>
            </ul>
          </motion.div>

          {/* Feature 3: Realistic Simulation */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">סימולציה מציאותית</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                תנאי בחינה אמיתיים עם מד זמן
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                רמת קושי זהה לבחינה האמיתית
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 me-3 flex-shrink-0"></span>
                תוצאות מיידיות ומשוב מפורט
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 