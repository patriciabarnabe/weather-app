import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface WeatherProps {
  weather: {
    temp: number;
    description: string;
    humidity: number;
    windSpeed: number;
  } | null;
}

const WeatherDisplay: React.FC<WeatherProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card sx={{ maxWidth: 345, mx: "auto", mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Temperatura: {weather.temp}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descrição: {weather.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Umidade: {weather.humidity}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Velocidade do vento: {weather.windSpeed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
