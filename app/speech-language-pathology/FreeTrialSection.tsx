export default function FreeTrialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          נסו בחינם - 20 שאלות ללא התחייבות
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          חוו את האפליקציה ללא סיכון וראו איך היא יכולה לעזור לכם
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-slate-800 mb-1">חוו את האפליקציה ללא סיכון</h3>
              <p className="text-slate-600">קבלו תחושה אמיתית של איך האפליקציה עובדת</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-slate-800 mb-1">ראו איך המעקב התקדמות עובד</h3>
              <p className="text-slate-600">הבינו איך האפליקציה עוזרת לזהות נקודות חולשה</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-slate-800 mb-1">הרגישו את הסימולציה המציאותית</h3>
              <p className="text-slate-600">טעמו מההתנסות של בחינה אמיתית</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-slate-800 mb-1">ללא כרטיס אשראי או התחייבות</h3>
              <p className="text-slate-600">פשוט התחילו מיד ללא תשלום</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            מוכנים להתחיל?
          </h3>
          <p className="text-slate-600 mb-6">
            קבלו גישה מיידית ל-20 שאלות חינם
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold text-xl px-10 py-4 rounded-xl hover:from-blue-700 hover:to-sky-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
            התחל ניסיון חינם
          </button>
          <p className="text-sm text-slate-500 mt-4">
            ללא כרטיס אשראי • גישה מיידית
          </p>
        </div>
      </div>
    </section>
  );
} 