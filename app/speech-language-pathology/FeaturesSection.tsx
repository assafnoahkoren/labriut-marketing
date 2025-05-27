const features = [
  {
    title: "מאות שאלות משחזורים קודמים",
    desc: "גישה למאגר ענק של שאלות ממבחנים אמיתיים, כדי שתוכלו לתרגל בצורה יעילה ומהירה.",
    img: "/slp/1.png",
    reverse: false,
  },
  {
    title: "תרגול לפי נושא",
    desc: "בחרו נושא ותרגלו אותו לעומק, כדי לחזק את הידע בדיוק היכן שצריך.",
    img: "https://dummyimage.com/300x200/bae6fd/ffffff&text=נושא",
    reverse: true,
  },
  {
    title: "מעקב אחרי ידע",
    desc: "עקבו אחרי ההתקדמות שלכם, ראו באילו נושאים אתם חזקים ובאילו כדאי להשתפר.",
    img: "https://dummyimage.com/300x200/bae6fd/ffffff&text=מעקב",
    reverse: false,
  },
  {
    title: "סימולציית מבחן",
    desc: "הרגישו את הלחץ של מבחן אמיתי עם סימולציה מלאה, כולל מד זמן ותוצאות מיידיות.",
    img: "https://dummyimage.com/300x200/bae6fd/ffffff&text=סימולציה",
    reverse: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      {features.map((f, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${f.reverse ? 'md:flex-row-reverse' : ''} items-center max-w-4xl mx-auto mb-16 last:mb-0`}
        >
          <div className="md:w-1/2 w-full px-6">
            <h1 className="text-5xl font-black mb-2 text-center md:text-right">{f.title}</h1>
            <p className="text-gray-600 text-center md:text-right">{f.desc}</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center px-6 mt-6 md:mt-0">
            <img src={f.img} alt="feature" className="rounded-xl w-72 lg:w-96 h-48 lg:h-64 object-cover" />
          </div>
        </div>
      ))}
    </section>
  );
} 