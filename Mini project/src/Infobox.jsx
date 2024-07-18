import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function Infobox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdnZ5JTIwcmFpbnxlbnwwfDB8MHx8fDA%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww";
    
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww"; 
    
    return (
        <div className="Infobox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= {
                            info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                       }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80
                            ? <ThunderstormIcon />
                            : info.temp > 15
                            ? <WbSunnyIcon />
                            : <AcUnitIcon />
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels
                                like {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}