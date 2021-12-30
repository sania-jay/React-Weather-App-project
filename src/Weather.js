import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
          <form>
              <div className="row">
                  <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control"/>  
                  </div>
                  <div className="col-3">
                      <input type="submit" value="Search" className="btn btn-primary" />
                  </div>
              </div>
              
          </form>
        <div className="row">
          <div className="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
            />
            13°C |°F
          </div>
          <div className="col-3 mt-3">
            <ul>
              <li>Percipitation: 8%</li>
              <li>Humidity: 88%</li>
              <li>Wind: 11mph</li>
            </ul>
          </div>
          <div className="col-6 right-col">
            <h1>London</h1>
            <ul>
              <li>Wednesday 22:01</li>
              <li>Mostly Cloudy</li>
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
