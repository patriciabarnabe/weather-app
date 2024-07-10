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
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import TemperatureDisplay from "./components/TemperatureDisplay";
import WeatherDetails from "./components/WeatherDetails";
import AirQuality from "./components/AirQuality";
import SunSchedule from "./components/SunSchedule";
import WeeklyForecast from "./components/WeeklyForecast";

const Root = styled(Box)({
  padding: "20px",
  background: "linear-gradient(to bottom, #a18cd1, #fbc2eb)",
  height: "100vh",
});

const NewContainer = styled(Box)({
  maxWidth: "800px",
  margin: "0 auto",
});

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

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeather();
    }
  }, [location, unit]);

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

  const handleSearch = (city?: string, country?: string) => {
    fetchWeather(city, country);
  };

  // Mock para simular dados de qualidade do ar, horário do sol e previsão semanal
  const airQuality = "Boa"; // Substitua pelo dado real
  const sunrise = "06:30"; // Substitua pelo dado real
  const sunset = "18:45"; // Substitua pelo dado real
  const weeklyForecast = [
    { day: "Amanhã", minTemp: 16, maxTemp: 21 },
    { day: "Sexta-Feira", minTemp: 20, maxTemp: 28 },
    { day: "Sábado", minTemp: 21, maxTemp: 25 },
    { day: "Domingo", minTemp: 14, maxTemp: 20 },
    { day: "Segunda-Feira", minTemp: 18, maxTemp: 24 },
  ]; // Substitua pelos dados reais

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Aplicativo Meteorológico
      </Typography>
      <CitySearch onSearch={handleSearch} />
      <UnitToggle unit={unit} onToggle={setUnit} />{" "}
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
      <Root>
        <NewContainer>
          <TemperatureDisplay weather={weather} />
          <WeatherDetails weather={weather} />
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12} md={6}>
              <AirQuality airQuality={airQuality} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SunSchedule sunrise={sunrise} sunset={sunset} />
            </Grid>
          </Grid>
          <WeeklyForecast forecast={weeklyForecast} />
        </NewContainer>
      </Root>
    </Container>
  );
};

export default App;
