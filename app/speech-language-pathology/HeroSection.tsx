export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          הכנה חכמה לבחינת הסמכה
          <span className="block text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
            בקלינאות תקשורת
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          תרגלו בכל מקום ובכל זמן עם סימולציות מציאותיות ומעקב התקדמות מתקדם
        </p>
        
        {/* Call-to-action button */}
        <button className="bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:from-blue-700 hover:to-sky-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl mb-4">
          התחל ניסיון חינם - 20 שאלות
        </button>
        
        {/* Supporting text */}
        <p className="text-sm text-slate-500 mb-16">
          ללא כרטיס אשראי • התחילו תוך דקה
        </p>
        
        {/* Decorative element */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
} 