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
}

interface WeeklyForecastResponse {
  daily: {
    temp: {
      min: number;
      max: number;
    };
  }[];
}

interface AirQualityResponse {
  list: {
    main: {
      aqi: number;
    };
  }[];
}

interface SunScheduleResponse {
  sys: {
    sunrise: number;
    sunset: number;
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

export const getWeeklyForecast = async (
  lat: number,
  lon: number,
  unit: string
) => {
  const url = `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${API_KEY}`;
  const response = await axios.get<WeeklyForecastResponse>(url);
  return response.data.daily.map((day) => ({
    minTemp: day.temp.min,
    maxTemp: day.temp.max,
  }));
};

export const getAirQuality = async (lat: number, lon: number) => {
  const url = `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await axios.get<AirQualityResponse>(url);
  return response.data.list[0].main.aqi;
};

export const getSunSchedule = async (lat: number, lon: number) => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await axios.get<SunScheduleResponse>(url);
  return {
    sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
  };
};
