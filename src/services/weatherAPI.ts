import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface DailyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: {
    description: string;
  }[];
}

interface ForecastResponse {
  daily: DailyWeather[];
}

export const getWeatherByCity = (
  city: string,
  country: string,
  units: "metric" | "imperial" = "metric"
) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return axios.get<WeatherResponse>(
    `${BASE_URL}?q=${encodeURIComponent(
      city
    )},${country}&appid=${API_KEY}&units=${units}`
  );
};

export const getWeatherByCoords = (
  lat: number,
  lon: number,
  units: "metric" | "imperial" = "metric"
) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return axios.get<WeatherResponse>(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
  );
};

export const getDailyForecast = (
  lat: number,
  lon: number,
  units: "metric" | "imperial" = "metric",
  exclude: string = "current,minutely,hourly"
) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return axios.get<ForecastResponse>(
    `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=${units}`
  );
};

// Simulação de função para obter previsão semanal
export const getWeeklyForecast = async (
  lat: number,
  lon: number,
  unit: string
) => {
  // Simulação de chamada de API
  const response = await fetch(
    `https://api.example.com/weekly-forecast?lat=${lat}&lon=${lon}&unit=${unit}`
  );
  const data = await response.json();
  return data;
};

// Simulação de função para obter qualidade do ar
export const getAirQuality = async (lat: number, lon: number) => {
  // Simulação de chamada de API
  const response = await fetch(
    `https://api.example.com/air-quality?lat=${lat}&lon=${lon}`
  );
  const data = await response.json();
  return data;
};

// Simulação de função para obter horário do sol
export const getSunSchedule = async (lat: number, lon: number) => {
  // Simulação de chamada de API
  const response = await fetch(
    `https://api.example.com/sun-schedule?lat=${lat}&lon=${lon}`
  );
  const data = await response.json();
  return data;
};
