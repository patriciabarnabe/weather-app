import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import CitySearch from "./components/CitySearch";
import UnitToggle from "./components/UnitToggle";
import { getWeatherByCity, getWeatherByCoords } from "./services/weatherAPI";
import useGeoLocation from "./hooks/useGeoLocation";
import {
  Container,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

interface Weather {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric"); // Estado de unidade inicial
  const location = useGeoLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city?: string, country?: string) => {
    setLoading(true);
    try {
      if (city && country) {
        const response = await getWeatherByCity(city, country, unit); // Passando a unidade como parâmetro
        setWeather({
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        });
      } else if (location.lat && location.lon) {
        const response = await getWeatherByCoords(
          location.lat,
          location.lon,
          unit
        ); // Passando a unidade como parâmetro
        setWeather({
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        });
      } else {
        setError(
          "Erro ao buscar dados meteorológicos. Verifique o nome da cidade e tente novamente."
        );
      }
      setError(null);
    } catch (error) {
      setError(
        "Erro ao buscar dados meteorológicos. Verifique o nome da cidade e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeather();
    }
  }, [location, unit]); // Adicionando 'unit' como dependência

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Aplicativo Meteorológico
      </Typography>
      <CitySearch onSearch={fetchWeather} />
      <UnitToggle unit={unit} onToggle={setUnit} />{" "}
      {/* Passando 'unit' e 'setUnit' para o componente UnitToggle */}
      {loading ? <CircularProgress /> : <WeatherDisplay weather={weather} />}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
