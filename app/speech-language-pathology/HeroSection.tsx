export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 py-16">
      {/* Main headline */}
      <h1 className="text-4xl font-bold mb-4">ברוכים הבאים לאפליקציית התרגול המובילה לסטודנטים להפרעות בתקשורת</h1>
      {/* Subheadline */}
      <p className="text-lg mb-6">הדרך הקלה, המהירה והיעילה להתכונן למבחנים בקלינאות תקשורת</p>
      {/* Call-to-action button */}
      <button className="px-6 py-2 bg-blue-600 text-white rounded">התחילו לתרגל עכשיו</button>
    </section>
  );
} 