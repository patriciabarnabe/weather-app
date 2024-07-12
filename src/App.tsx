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
  name: string;
  country: string;
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const location = useGeoLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location.lat !== null && location.lon !== null) {
      fetchWeather();
    }
  }, [location, unit]);

  const fetchWeather = async (city?: string, country?: string) => {
    setLoading(true);
    try {
      let response;
      if (city && country) {
        response = await getWeatherByCity(city, country, unit);
      } else if (location.lat !== null && location.lon !== null) {
        response = await getWeatherByCoords(location.lat, location.lon, unit);
      }
      if (response) {
        setWeather({
          temp: response.main.temp,
          description: response.weather[0].description,
          humidity: response.main.humidity,
          windSpeed: response.wind.speed,
          name: response.name,
          country: response.sys.country,
        });
        setError(null);
      } else {
        setError(
          "Error when fetching weather data. Check the city name and try again."
        );
      }
    } catch (error) {
      setError(
        "Error when fetching weather data. Check the city name and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city?: string, country?: string) => {
    fetchWeather(city, country);
  };

  return (
    <>
      <div className="background-animation"></div>
      <Container
        sx={{
          textAlign: "center",
          mt: 14,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "26px",
          width: { xs: "100%", sm: "80%", md: "60%" },
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold" }}
          gutterBottom
        >
          ~ Weather Forecast ~
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
      </Container>
    </>
  );
};

export default App;
