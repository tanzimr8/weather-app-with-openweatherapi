import React, { useEffect, useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import Loading from './Loading'
const WeatherApp = () => {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [weatherData,setWeatherData] = useState(null);
    const fetchWeatherData = async(param)=>{
        setLoading(true);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${'d9feebb33f2316f3d83190828c15b7a8'}`);
            if(!response.ok) throw new Error (response.statusText);
            const result = await response.json();
            console.log(result);
            if(result){
                setWeatherData(result);
            }
            setLoading(false);
        }
        catch(e){
            setError(e);
        }
    }
    const handleSearch = async()=>{
        fetchWeatherData(search);
        setSearch('');
    }
    useEffect(()=>{
        fetchWeatherData('Rajshahi');
    },[])
    // const apiKey = 'd9feebb33f2316f3d83190828c15b7a8';
    // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}'
    if(loading){
        return <Loading/>
    }
  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      <Weather weatherData={weatherData}/>
    </div>
  )
}

export default WeatherApp
