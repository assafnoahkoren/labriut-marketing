export default function ConfidenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              מרגישים מוכנים ובטוחים לקראת הבחינה
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              עם האפליקציה שלנו, תגיעו לבחינה עם ביטחון מלא וידיעה ברורה של יכולותיכם
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-reverse space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">תדעו בדיוק איפה אתם עומדים</h3>
                  <p className="text-slate-600">מעקב מפורט יראה לכם את רמת ההכנה האמיתית שלכם</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">תרגישו גאים בהתקדמות שלכם</h3>
                  <p className="text-slate-600">ראו את השיפור הקבוע ותחגגו כל הישג קטן וגדול</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">תגיעו לבחינה עם ביטחון מלא</h3>
                  <p className="text-slate-600">ההכנה המקיפה תעניק לכם את הביטחון שאתם צריכים</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">תשיגו את המטרה שלכם</h3>
                  <p className="text-slate-600">הפכו להיות קלינאים מוסמכים ומקצועיים</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 