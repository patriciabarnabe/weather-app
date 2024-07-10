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

interface SunScheduleProps {
  sunrise: string;
  sunset: string;
}

const SunSchedule: React.FC<SunScheduleProps> = ({ sunrise, sunset }) => {
  return (
    <StyledPaper>
      <Typography variant="h6">Horário do sol</Typography>
      <Typography variant="h3">{sunset}</Typography>{" "}
      {/* Ajuste para mostrar o pôr do sol */}
    </StyledPaper>
  );
};

export default SunSchedule;
