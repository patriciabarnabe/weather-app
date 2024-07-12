import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ThermostatIcon from "@mui/icons-material/ThermostatRounded";
import AirIcon from "@mui/icons-material/AirRounded";
import OpacityIcon from "@mui/icons-material/OpacityRounded";
import DescriptionIcon from "@mui/icons-material/InfoOutlined";

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

const GridItem = styled(Grid)({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  padding: "12px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

const HighlightedText = styled(Typography)({
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  display: "inline-block",
  fontWeight: "bold",
});

const WeatherDisplay: React.FC<WeatherProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <StyledCard>
      <Typography variant="subtitle1" component="div">
        <HighlightedText>
          {weather.name} - {weather.country}
        </HighlightedText>
      </Typography>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <GridItem>
              <Typography variant="subtitle1">Temperature</Typography>
              <FlexContainer
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">{weather.temp}°C</Typography>
                <ThermostatIcon />
              </FlexContainer>
            </GridItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GridItem>
              <Typography variant="subtitle1">Wind Speed</Typography>
              <FlexContainer
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">{weather.windSpeed} m/s</Typography>
                <AirIcon />
              </FlexContainer>
            </GridItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GridItem>
              <Typography variant="subtitle1">Humidity</Typography>
              <FlexContainer
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">{weather.humidity}%</Typography>
                <OpacityIcon />
              </FlexContainer>
            </GridItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GridItem>
              <Typography variant="subtitle1">Description</Typography>
              <FlexContainer
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">{weather.description}</Typography>
                <DescriptionIcon />
              </FlexContainer>
            </GridItem>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherDisplay;
