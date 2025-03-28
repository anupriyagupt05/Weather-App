import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";




export default function WeatherApp() {
 const[weatherInfo,setWeatherInfo]=useState({
    city: "Lucknow",
      feelsLike:24.41,
      humidity:33,
      temp:24.99,
      tempMax:24.99,
      tempMin:24.99,
      weather:"broken clouds",
 });

 let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
 }


    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}