export default function FooterSection() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">לבריאות תקשורת</h3>
            <p className="text-slate-300 leading-relaxed">
              האפליקציה המובילה לתרגול והכנה למבחנים בתחום הפרעות התקשורת
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">דף הבית</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">אודות</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">תמיכה</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">תנאי שימוש</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">צרו קשר</h4>
            <div className="space-y-2 text-slate-300">
              <p>info@labriut-communication.co.il</p>
              <p>03-1234567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 לבריאות תקשורת. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
} 