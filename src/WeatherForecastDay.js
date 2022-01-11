import React from 'react';
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature(){
        return Math.round(props.data.temp.max);
    }

    function minTemperature(){
        return Math.round(props.data.temp.min);
    }

    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

      return days[day];
    }
return (
  <div>
    <div className="WeatherForecastDay">{day()}</div>
    <span className="WeatherForecast">
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
    </span>

    <div className="WeatherForecast-temperatures">
      <span className="WeatherForecast-temperature-max">
        {" "}
        {maxTemperature()}°
      </span>
      <span className="WeatherForecast-temperature-min">
        {" "}
        {minTemperature()}°
      </span>
    </div>
  </div>
);

}
