import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
return (
  <div className="weatherInfo">
    <div className="row mt-3">
      <div className="col-4">
          <WeatherIcon code={props.data.icon} /> 
       
        <WeatherTemperature celsius={props.data.temperature} />
       
      </div>
      <div className="col-4 mt-3">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}mph</li>
        </ul>
      </div>
      <div className="col-4 right-col">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">
            {props.data.description}
          </li>
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
  </div>
);
}

