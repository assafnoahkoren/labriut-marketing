export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-2xl font-bold">&#128202;</span>
        <span className="font-bold text-lg">Starter</span>
      </div>
      {/* Navigation */}
      <nav className="flex gap-6 text-sm">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Docs</a>
        <a href="#" className="hover:text-blue-600">GitHub</a>
      </nav>
    </header>
  );
} 