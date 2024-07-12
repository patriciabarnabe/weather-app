import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ThermostatIcon from "@mui/icons-material/ThermostatRounded"; // ícone para a temperatura
import AirIcon from "@mui/icons-material/AirRounded"; // ícone para a velocidade do vento
import OpacityIcon from "@mui/icons-material/OpacityRounded"; // ícone para a umidade
import DescriptionIcon from "@mui/icons-material/InfoOutlined"; // ícone para a descrição

interface WeatherProps {
  weather: {
    temp: number;
    description: string;
    humidity: number;
    windSpeed: number;
    name: string;
    country: string;
  } | null;
}

const StyledCard = styled(Card)({
  maxWidth: 600,
  margin: "16px auto",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  color: "#000",
  padding: "16px",
});

const FlexContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const WeatherDisplay: React.FC<WeatherProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <StyledCard>
      <Typography variant="subtitle1">
        {weather.name} - {weather.country}
      </Typography>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Temperature</Typography>
            <FlexContainer
              sx={{
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{weather.temp}°C</Typography>
              <ThermostatIcon />
            </FlexContainer>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Wind Speed</Typography>
            <FlexContainer
              sx={{
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{weather.windSpeed} m/s</Typography>
              <AirIcon />
            </FlexContainer>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Humidity</Typography>
            <FlexContainer
              sx={{
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{weather.humidity}%</Typography>
              <OpacityIcon />
            </FlexContainer>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Description</Typography>
            <FlexContainer
              sx={{
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{weather.description}</Typography>
              <DescriptionIcon />
            </FlexContainer>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherDisplay;
