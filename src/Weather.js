import axios from "axios";
import { useState,useEffect } from "react";
const Weather=({country})=>
{
    const [weatherData,setWeatherData]=useState({main:{temp:0},weather:{icon:'10D'},wind:{speed:0}});
    const [url1,setUrl1]=useState('')
    const key='6991475da1131b40745e639eb1bbf650'
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+country.latlng[0]+'&lon='+country.latlng[1]+'&appid='+key;
    useEffect(()=>{
        axios.get(url)
    .then(response=>{
        setWeatherData(response.data)
        
        const x='http://openweathermap.org/img/wn/'+response.data.weather[0].icon+'@2x.png'
        setUrl1(x)
        return response.data.weather.icon;

    })
    // eslint-disable-next-line
    },[])
    
 //   console.log(response.data.main.temp-273.15)

              
    return (
        <>
           
            <h4>Weather in {country.capital}</h4>
            <p>temperature {(weatherData.main.temp-273.15).toPrecision(3)} Celcius</p>
            <img src={url1} alt='Weather icon' />
            <p>wind {weatherData.wind.speed} m/s</p>
            
            
        </>
    )
}
export default Weather;