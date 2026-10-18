function WeatherCard({ weather, temp, desc, darkMode }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-xl lg:col-span-2">
        <p className="text-sm tracking-widest text-blue-200">
          CURRENT CONDITIONS
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-6xl font-bold md:text-8xl">
              {Number(temp).toFixed(1)}°C
            </h2>

            <p className="mt-5 text-2xl font-semibold">{weather}</p>
            <p className="mt-2 capitalize text-blue-100">{desc}</p>
          </div>

          <div className="text-6xl">
            {weather.toLowerCase().includes("cloud")
              ? "☁️"
              : weather.toLowerCase().includes("rain")
              ? "🌧️"
              : weather.toLowerCase().includes("clear")
              ? "☀️"
              : "🌤️"}
          </div>
        </div>

        <p className="mt-10 border-t border-white/20 pt-5 text-sm text-blue-100">
          Live weather data provided by mr.weather
        </p>
      </div>

      <div
        className={`rounded-3xl border p-8 shadow-sm ${
          darkMode
            ? "border-slate-800 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        <h3 className="text-xl font-bold">Weather Details</h3>

        <div className="mt-6 border-b border-slate-200 py-5">
          <p className="text-sm text-slate-500">Temperature</p>
          <p className="mt-2 text-3xl font-bold">{Number(temp).toFixed(1)}°C</p>
        </div>

        <div className="py-5">
          <p className="text-sm text-slate-500">Conditions</p>
          <p className="mt-2 text-xl font-semibold">{weather}</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-4 text-slate-800">
          <p className="text-sm text-blue-700">Description</p>
          <p className="mt-1 capitalize">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;