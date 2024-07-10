import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const DetailsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

const DetailItemBox = styled(Box)({
  textAlign: "center",
});

interface WeatherDetailsProps {
  weather: {
    temp: number;
    description: string;
    humidity: number;
    windSpeed: number;
  } | null;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <DetailsBox>
      <DetailItemBox>
        <Typography>Vento</Typography>
        <Typography>{weather.windSpeed} m/s</Typography>
      </DetailItemBox>
      <DetailItemBox>
        <Typography>Umidade</Typography>
        <Typography>{weather.humidity}%</Typography>
      </DetailItemBox>
    </DetailsBox>
  );
};

export default WeatherDetails;
