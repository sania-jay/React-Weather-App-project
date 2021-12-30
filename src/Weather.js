import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { scryRenderedComponentsWithType } from "react-dom/cjs/react-dom-test-utils.production.min";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready : false});

  function displayCity(response) {
      setWeatherData({
        ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 22:01",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name
  });
  }

if (weatherData.ready) {
return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <img
            src={`https://ssl.gstatic.com/onebox/weather/64/cloudy.png`}
            alt={weatherData.description}
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C |°F</span>
        </div>
        <div className="col-4 mt-3">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
        <div className="col-4 right-col">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className= "text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row third-row">
          <div className="col-6">
            <ul>
              <li>Temperature</li>
              <li>Percipitation</li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
);
} else {
  let apiKey = "62231151ce343c4d68652e1617efc22f";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayCity);  

    return "Loading...";
}
}
  


