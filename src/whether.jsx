import { useState } from "react";
import axios from "axios";

function getWeather()
{
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    )
    .then(function (success) {
      console.log(success.data);

      setweather(success.data.weather[0].main);
      settemp(success.data.main.temp);
      setdesc(success.data.weather[0].description);
    })
    .catch(function (error) {
      console.log(error);
      alert("City not found!");
    });
}
    function getWeather()
    {
        console.log("Button clicked!");
    }

    return (
    <div>
      <h1>Weather Report</h1>

      <input type="text" placeholder="Enter city" value={city} onChange={handleCity}/>

      <button onClick={getWeather}>Get Weather</button>

      <h3>City: {city}</h3>
      <h3>Weather: {weather}</h3>
      <h3>Temperature: {temp}°C</h3>
      <h3>Description: {desc}</h3>
    </div>
  );


export default Weather;