import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
let [ready, setReady] =  useState(false);
    let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);


  function handleResponse(response){
    setForecast(response.data.daily);
    setReady(true);
  }
if (ready) {
  console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
if (index < 5) {
  return(
    <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
  );
} else {
  return null;
}
          })}
        </div>
      </div>
    );
} else {
    let apiKey = `5427bd414e8b10e9ef60d969dd1d4f63`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

return null;

}
}