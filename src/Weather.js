import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
  const [city, setCity]= useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready : false});

  function displayCity(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
        icon: response.data.weather[0].icon,
      });
  }

  function search() {
   let apiKey = "62231151ce343c4d68652e1617efc22f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayCity); 
}

function handleSubmit(event){
    event.preventDefault();
   search();
}

function updateSearchInput(event){
    setCity(event.target.value);
}

if (weatherData.ready) {
return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control text"
            autoFocus="on"
            onChange={updateSearchInput}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn w-100"
          />
        </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast coordinates={weatherData.coordinates} />
  </div>
);
} else {
  search();
  return "Loading...";
}
}
  


