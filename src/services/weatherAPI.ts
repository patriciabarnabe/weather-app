import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

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
  name: string;
  sys: {
    country: string;
  };
}

export const getWeatherByCity = async (
  city: string,
  country: string,
  unit: string
) => {
  const url = `${BASE_URL}/weather?q=${city},${country}&units=${unit}&appid=${API_KEY}`;
  const response = await axios.get<WeatherResponse>(url);
  return response.data;
};

export const getWeatherByCoords = async (
  lat: number,
  lon: number,
  unit: string
) => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
  const response = await axios.get<WeatherResponse>(url);
  return response.data;
};
