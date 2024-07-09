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

export const getWeatherByCity = (city: string, country: string) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return axios.get<WeatherResponse>(
    `${BASE_URL}?q=${encodeURIComponent(
      city
    )},${country}&appid=${API_KEY}&units=metric`
  );
};

export const getWeatherByCoords = (lat: number, lon: number) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return axios.get<WeatherResponse>(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
};
