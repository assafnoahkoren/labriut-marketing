export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          מתחילים לעבוד אבל עדיין לא עברתם את בחינת הסמכה?
        </h2>
        
        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">אין זמן לתרגל</h3>
            <p className="text-slate-600">
              קשה למצוא זמן לתרגל עם לוח זמנים עמוס של עבודה והתחלת הקריירה
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">לא יודעים אם מוכנים</h3>
            <p className="text-slate-600">
              לא יודעים אם אתם מוכנים לבחינה האמיתית ואיזה נושאים צריכים חיזוק
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">חסר תרגול מציאותי</h3>
            <p className="text-slate-600">
              חסר לכם תרגול מציאותי שדומה לבחינה עם לחץ זמן ותנאים אמיתיים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 