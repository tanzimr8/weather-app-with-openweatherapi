import React from 'react'
import { SiStatuspal } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

const Weather = ({weatherData}) => {
  const getCurrentDate= ()=>{
    return new Date().toLocaleDateString('en-us',{
      weekday:'long',
      month:'long',
      day:'numeric',
      year:'numeric'
    })
  }
  return (
    // whole container
    <div className="position-center weather-container">    
      <div className="weather-location weather-card">  
      {weatherData && weatherData.name && weatherData.sys && (
      <p className="location">{weatherData.name}, {weatherData.sys.country}</p>
      )}
        <p className="time">{getCurrentDate()}</p>
      </div>
      <div className="position-center weather-card weather-info ">
        <div className="info-temperature">
            {weatherData &&weatherData.main.temp && (
              <div className="position-center temperature">
            <h3>{Math.floor(weatherData && weatherData.main.temp - 273)}&deg;C</h3>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" /></div>)}
          {weatherData && weatherData.main.temp_max && weatherData.main.temp_min && (<div className="temperature-minmax">
          High {Math.floor(weatherData.main.temp_max - 273)}&deg; Low {Math.floor(weatherData.main.temp_min - 273)}&deg;
          </div>)}
          
        </div>
        <div className="position-center info-condition">
          <p className='condition'>{weatherData && weatherData.weather[0].description && weatherData.weather[0].description}</p>
          <p className='realfeel'>Feels Like {weatherData && weatherData.main.feels_like && Math.floor(weatherData.main.feels_like - 273)}&deg;</p>
        </div>
      </div>

      <div className="position-center weather-card weather-other-details ">
      <p> <span><SiStatuspal/></span> {weatherData && weatherData.weather[0].main}</p>
      <p><span><WiHumidity/> </span>{weatherData && weatherData.main.humidity}%</p>
      <p><span><FaWind/> </span>{weatherData && weatherData.wind.speed}KPH</p>
      </div>
    </div>
  )
}

export default Weather
