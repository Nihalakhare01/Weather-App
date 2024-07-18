import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css"
import { useState } from "react";


export default function Searchbox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city, 
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }  
    };


    
    let handleChange = (evnt) => {
        setCity(evnt.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }catch(err){
            setError(true);
        }
    };

    return (
        <div className="Searchbox">
            <h3>Search for Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br /><br />
                <Button variant="contained" type="submit" > Send</Button>
                {error && <p style={{color: "red"}}> No such place exist</p>}
            </form>
          
        </div>
    )
}