import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  color: "#fff",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  marginTop: "20px",
});

const DetailItemBox = styled(Box)({
  textAlign: "center",
});

interface WeeklyForecastProps {
  forecast: {
    day: string;
    minTemp: number;
    maxTemp: number;
  }[];
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecast }) => {
  return (
    <StyledPaper>
      <Typography variant="h6">Previsão da semana</Typography>
      <Box display="flex" justifyContent="space-around" marginTop="20px">
        {forecast.map((dayForecast, index) => (
          <DetailItemBox key={index}>
            <Typography>{dayForecast.day}</Typography>
            <Typography>
              {dayForecast.maxTemp}° {dayForecast.minTemp}°
            </Typography>
          </DetailItemBox>
        ))}
      </Box>
    </StyledPaper>
  );
};

export default WeeklyForecast;
