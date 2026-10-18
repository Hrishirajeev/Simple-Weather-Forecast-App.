function SearchBar({ city, handleCity, getWeather, loading, darkMode }) {
  return (
    <div className="flex max-w-4xl flex-col gap-3 sm:flex-row">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={handleCity}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            getWeather();
          }
        }}
        className={`min-w-0 flex-1 rounded-xl border px-5 py-4 outline-none focus:ring-4 focus:ring-blue-500/20 ${
          darkMode
            ? "border-slate-700 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-900"
        }`}
      />

      <button
        onClick={getWeather}
        disabled={loading || !city.trim()}
        className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Search Weather →"}
      </button>
    </div>
  );
}

export default SearchBar;