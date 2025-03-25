
import "./InfoBox.css";

export default function InfoBox({info}){
   let COLD_URL = "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwZGF5cyUyMHNreSUyMGltYWdlfGVufDB8fDB8fHww";
   let HOT_URL = "https://plus.unsplash.com/premium_photo-1663954865003-43333b9d5925?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let RAIN_URL = "https://unsplash.com/photos/clear-glass-window-with-tear-drop-rain-a4wUKaaMGWQ";
   const backgroundUrl = info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL;
  
   return (
    <div className="infoBox" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h1 style={{ color: "white" }}>Weather Info</h1>
      
        
      <div className="weatherCard">
        <div className="weatherContentainer">
          <h2>{info.city}</h2>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>Weather: {info.weather}, feels like {info.feelslike}&deg;C</p>
        </div>
      </div>
    </div>
    
  );
   
}