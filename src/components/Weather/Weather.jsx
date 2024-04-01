import React from 'react'
// import image from './../../images/weather-conditions/partly-cloudy.png'
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
    <div className='weather-container'>
      <div className="weather-location">
        <p className='location'>{weatherData.name ?weatherData.name : ''}, {weatherData.sys.country? weatherData.sys.country: ''}</p>
        <p className='date'>{getCurrentDate()}</p>
      </div>
      <div className="weather">
      
      <div className="weather-info">
        <div className="temperature">
          <h2>{Math.floor(weatherData.main.temp - 273)}&deg;</h2>
          <p>Real feel: {Math.floor(weatherData.main.feels_like - 273)}&deg;</p>
        </div>
        <div className="weather-image">
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
      </div>
        
      </div>
      
      </div>
      <div className="weather-feature">
          <p>Condition: <br></br>{weatherData.weather[0].main}</p>
          <p>Humidity: <br></br>{weatherData.main.humidity}%</p>
          <p>Wind speed:<br></br> {weatherData.wind.speed}KPH</p>
        </div>
    </div>
  )
}

export default Weather
