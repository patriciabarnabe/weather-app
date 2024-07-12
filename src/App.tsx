import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import CitySearch from "./components/CitySearch";
import UnitToggle from "./components/UnitToggle";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getWeeklyForecast,
  getAirQuality,
  getSunSchedule,
} from "./services/weatherAPI";
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

interface SunScheduleData {
  sunrise: string;
  sunset: string;
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const location = useGeoLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<
    { day: string; minTemp: number; maxTemp: number }[]
  >([]);
  const [airQuality, setAirQuality] = useState<string>(""); // Inicializado como uma string vazia
  const [sunSchedule, setSunSchedule] = useState<SunScheduleData>({
    sunrise: "",
    sunset: "",
  });

  useEffect(() => {
    if (location.lat !== null && location.lon !== null) {
      fetchWeather();
      fetchWeeklyForecast();
      fetchAirQuality();
      fetchSunSchedule();
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
        });
        setError(null);
      } else {
        setError(
          "Erro ao buscar dados meteorológicos. Verifique o nome da cidade e tente novamente."
        );
      }
    } catch (error) {
      setError(
        "Erro ao buscar dados meteorológicos. Verifique o nome da cidade e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchWeeklyForecast = async () => {
    try {
      if (location.lat !== null && location.lon !== null) {
        const data = await getWeeklyForecast(location.lat, location.lon, unit);
        // Mapeando os dados para o formato esperado pelo estado
        const formattedData = data.map((item) => ({
          day: "Dia da semana", // Aqui você pode ajustar conforme necessário
          minTemp: item.minTemp,
          maxTemp: item.maxTemp,
        }));
        setWeeklyForecast(formattedData);
      }
    } catch (error) {
      console.error("Erro ao buscar previsão semanal:", error);
      setError(
        "Erro ao buscar previsão semanal. Verifique a conexão e tente novamente."
      );
    }
  };

  const fetchAirQuality = async () => {
    try {
      if (location.lat !== null && location.lon !== null) {
        const data = await getAirQuality(location.lat, location.lon);
        setAirQuality(data.toString()); // Convertendo para string, se necessário
      }
    } catch (error) {
      console.error("Erro ao buscar qualidade do ar:", error);
      setError(
        "Erro ao buscar qualidade do ar. Verifique a conexão e tente novamente."
      );
    }
  };

  const fetchSunSchedule = async () => {
    try {
      if (location.lat !== null && location.lon !== null) {
        const data = await getSunSchedule(location.lat, location.lon);
        setSunSchedule({
          sunrise: data.sunrise,
          sunset: data.sunset,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar horário do sol:", error);
      setError(
        "Erro ao buscar horário do sol. Verifique a conexão e tente novamente."
      );
    }
  };

  const handleSearch = (city?: string, country?: string) => {
    fetchWeather(city, country);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Weather Forecast
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
  );
};

export default App;
