import React, { useEffect, useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import Loading from './Loading'
import ShowErrorComponent from './ShowErrorComponent'
import Footer from './Footer'
const WeatherApp = () => {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [weatherData,setWeatherData] = useState(null);
    const fetchWeatherData = async(param)=>{
        setLoading(true);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${'d9feebb33f2316f3d83190828c15b7a8'}`);
            // if(!response.ok) throw new Error (response.statusText);
            const result = await response.json();
            if(result.cod !== '404'){
                setWeatherData(result);
                setLoading(false);
                setError(null);
            }else{
                setError('No record found! Please enter a valid city name');
                setLoading(false);
            }
        }
        catch(e){
            setError(e);
            setLoading(false)
        }
    }
    const handleSearch = (e)=>{
        if(search ===''){
            setError('Please enter a valid city');
        }
        else{
            fetchWeatherData(search);
            setSearch('');
        }    
    }
    useEffect(()=>{
        fetchWeatherData('Rajshahi');
    },[])
    if(loading){
        return <Loading/>
    }
  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      {error ? <ShowErrorComponent error={error}/> : <Weather weatherData={weatherData}/>}
      <Footer/>
      {/* <Loading/> */}
    </div>
  )
}

export default WeatherApp
