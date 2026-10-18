function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`flex items-center justify-between px-6 py-5 md:px-10 ${
        darkMode
          ? "border-b border-slate-800 bg-slate-900"
          : "border-b border-slate-200 bg-white"
      }`}
    >
      <h1 className="text-2xl font-bold md:text-3xl">
        ☁ Weatherly
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`rounded-xl px-4 py-2 font-semibold ${
          darkMode
            ? "bg-slate-800 text-yellow-300"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;