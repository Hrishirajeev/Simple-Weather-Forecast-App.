import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import EmptyState from "./components/EmptyState";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleCity(event) {
    setCity(event.target.value);
  }

  function getWeather() {
    if (!city.trim()) return;

    setLoading(true);
    setWeather("");
    setTemp("");
    setDesc("");

    axios
    .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c75c45cfed7b61bf60869dd5b939d76&units=metric`)

      .then(function (success) {
        setWeather(success.data.weather[0].main);
        setTemp(success.data.main.temp);
        setDesc(success.data.weather[0].description);
      })
      .catch(function (error) {
        console.log(error);
        alert("City not found!");
      })
      .finally(function () {
        setLoading(false);
      });
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <p className="text-sm font-semibold tracking-widest text-blue-500">
          WEATHER DASHBOARD / LIVE WEATHER
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Weather Forecast
        </h2>

        <p
          className={`mt-3 mb-8 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Get current weather conditions for any city.
        </p>

        <SearchBar
          city={city}
          handleCity={handleCity}
          getWeather={getWeather}
          loading={loading}
          darkMode={darkMode}
        />

        {weather ? (
          <WeatherCard
            weather={weather}
            temp={temp}
            desc={desc}
            darkMode={darkMode}
          />
        ) : (
          <EmptyState darkMode={darkMode} />
        )}

        <footer className="mt-12 border-t border-slate-300 py-5 text-center text-sm text-slate-500">
          Weatherly · Powered by mr.weather
        </footer>
      </section>
    </main>
  );
}

export default App;