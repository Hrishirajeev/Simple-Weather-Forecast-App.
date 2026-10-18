function EmptyState({ darkMode }) {
  return (
    <div
      className={`mt-10 rounded-3xl border px-6 py-16 text-center shadow-sm md:py-20 ${
        darkMode
          ? "border-slate-800 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="text-6xl">🌤️</div>

      <h3 className="mt-5 text-2xl font-bold md:text-3xl">
        Your city's weather, at a glance
      </h3>

      <p className="mx-auto mt-3 max-w-lg text-slate-500">
        Search for a city above to see its current temperature and conditions.
      </p>
    </div>
  );
}

export default EmptyState;