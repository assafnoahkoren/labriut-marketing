export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          מוכנים להתחיל?
          <span className="block">קבלו 20 שאלות חינם עכשיו</span>
        </h2>
        
        {/* Supporting Text */}
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          התחילו את ההכנה שלכם לבחינת הסמכה היום עם גישה מיידית לאפליקציה המובילה
        </p>

        {/* CTA Button */}
        <button className="bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-2xl mb-6">
          התחל ניסיון חינם - 20 שאלות
        </button>

        {/* Urgency Message */}
        <p className="text-blue-200 font-medium">
          התחילו היום והרגישו את ההבדל מחר
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
          <div className="flex items-center justify-center space-x-reverse space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>ללא כרטיס אשראי</span>
          </div>
          <div className="flex items-center justify-center space-x-reverse space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
            </svg>
            <span>גישה מיידית</span>
          </div>
          <div className="flex items-center justify-center space-x-reverse space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>מאובטח לחלוטין</span>
          </div>
        </div>
      </div>
    </section>
  );
} 