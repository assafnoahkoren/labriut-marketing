export default function CallToActionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          התחילו לתרגל עוד היום ולשפר את הסיכוי להצלחה במבחן!
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          הצטרפו לאלפי סטודנטים שכבר משתמשים באפליקציה שלנו
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#" 
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            התחילו תרגול חינם
          </a>
          <a 
            href="#" 
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            למידע נוסף
          </a>
        </div>
      </div>
    </section>
  );
} 