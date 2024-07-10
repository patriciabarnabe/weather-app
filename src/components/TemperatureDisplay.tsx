import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  color: "#fff",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
});

const TempTypography = styled(Typography)({
  fontSize: "4rem",
});

interface TemperatureDisplayProps {
  weather: {
    temp: number;
    description: string;
    humidity: number;
    windSpeed: number;
  } | null;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <StyledPaper>
      <TempTypography variant="h3">{weather.temp}°C</TempTypography>
      <Typography variant="h6">{weather.description}</Typography>
    </StyledPaper>
  );
};

export default TemperatureDisplay;
