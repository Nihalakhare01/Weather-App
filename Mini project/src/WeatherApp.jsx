import Searchbox from './Searchbox'
import Infobox from './Infobox'
import { useState } from 'react'

export default function WeatherApp(){

        const [WeatherInfo, setWeatherInfo] = useState({
            city:"Delhi",
            feelslike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze",
        }); 

        let updateInfo = (result) => {
            setWeatherInfo(result);
        }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Weather App</h2>
                <Searchbox updateInfo= {updateInfo} />
                <Infobox info = {WeatherInfo} />
        </div>

    )
}