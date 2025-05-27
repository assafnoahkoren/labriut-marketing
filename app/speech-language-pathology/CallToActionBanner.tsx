export default function CallToActionBanner() {
  return (
    <section className="bg-blue-50 py-8 px-4 flex justify-center">
      <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-medium text-gray-800">התחילו לתרגל עוד היום ולשפר את הסיכוי להצלחה במבחן! <a href="#" className="text-blue-600 underline">התחילו תרגול חינם.</a></span>
        <a href="#" className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition">התחל עכשיו</a>
      </div>
    </section>
  );
} 