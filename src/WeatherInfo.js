import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
return (
  <div className="weatherInfo">
    <div className="row mt-3">
      <div className="col-6">
        <div className="float-left mt-4">
            <h1 className="mb-1">{props.data.city}</h1>
          <li className="mb-2">
            <FormattedDate date={props.data.date} />
          </li>
          <WeatherIcon code={props.data.icon} size={48} />

          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        
      </div>
      <div className="col-6 right-col mt-4">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}mph</li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row third-row">
        <div className="col">
           
          <ul className="mt-4 text-center">
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

