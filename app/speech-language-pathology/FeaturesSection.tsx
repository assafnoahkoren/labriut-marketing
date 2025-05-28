const features = [
  {
    title: "מאות שאלות משחזורים קודמים",
    desc: "גישה למאגר ענק של שאלות ממבחנים אמיתיים, כדי שתוכלו לתרגל בדיוק מה שמחכה לכם.",
    img: "https://dummyimage.com/400x300/dbeafe/1e40af&text=שאלות",
    reverse: false,
  },
  {
    title: "תרגול לפי נושא",
    desc: "בחרו נושא שמעניין אתכם ותרגלו עליו לעומק, כדי לחזק את הידע בדיוק היכן שצריך.",
    img: "https://dummyimage.com/400x300/dbeafe/1e40af&text=נושא",
    reverse: true,
  },
  {
    title: "מעקב אחרי ידע",
    desc: "עקבו אחרי ההתקדמות שלכם, ראו באילו נושאים אתם חזקים ובאילו כדאי להשתפר.",
    img: "https://dummyimage.com/400x300/dbeafe/1e40af&text=מעקב",
    reverse: false,
  },
  {
    title: "סימולציית מבחן",
    desc: "הרגישו את הלחץ של מבחן אמיתי עם סימולציה מלאה, כולל מד זמן ותוצאות מיידיות.",
    img: "https://dummyimage.com/400x300/dbeafe/1e40af&text=סימולציה",
    reverse: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row ${f.reverse ? 'lg:flex-row-reverse' : ''} items-center gap-12 mb-24 last:mb-0`}
          >
            <div className="lg:w-1/2 w-full">
              <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6 text-center lg:text-start leading-tight">
                {f.title}
              </h1>
              <p className="text-lg text-slate-600 text-center lg:text-start leading-relaxed max-w-lg mx-auto lg:mx-0">
                {f.desc}
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative">
                <img 
                  src={f.img} 
                  alt="feature" 
                  className="rounded-2xl shadow-2xl w-80 h-60 object-cover border border-blue-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-sky-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 