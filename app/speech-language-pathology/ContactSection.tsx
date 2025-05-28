export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">יש שאלות? נשמח לעזור</h2>
          <p className="text-xl text-slate-600">
            הצוות שלנו כאן כדי לענות על כל השאלות ולעזור לכם להתחיל
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Support */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">תמיכה מהירה ב-WhatsApp</h3>
            <p className="text-slate-600 mb-6">
              צרו קשר דרך WhatsApp לתמיכה מהירה ואישית. נענה על כל השאלות שלכם ונעזור לכם להתחיל בצורה הטובה ביותר.
            </p>
            <a 
              href="https://wa.me/972501234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
              שלחו הודעה ב-WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">שאלות נפוצות</h3>
            <div className="text-right space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">איך מתחילים?</h4>
                <p className="text-slate-600 text-sm">פשוט לחצו על "התחל ניסיון חינם" וקבלו גישה מיידית ל-20 שאלות</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">האם צריך כרטיס אשראי?</h4>
                <p className="text-slate-600 text-sm">לא! הניסיון החינם זמין מיד ללא כרטיס אשראי</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">איך האפליקציה עובדת?</h4>
                <p className="text-slate-600 text-sm">תרגלו שאלות, עקבו אחרי ההתקדמות ובצעו סימולציות מלאות</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
          <p className="text-slate-600">
            <span className="font-semibold text-slate-800">זקוקים לעזרה נוספת?</span> הצוות שלנו זמין בWhatsApp לכל שאלה או בעיה טכנית
          </p>
        </div>
      </div>
    </section>
  );
} 