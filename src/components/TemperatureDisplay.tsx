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

const TemperatureDisplay: React.FC = () => {
  return (
    <StyledPaper>
      <TempTypography variant="h3">18°C</TempTypography>
      <Typography variant="h6">Rio do Sul, SC</Typography>
    </StyledPaper>
  );
};

export default TemperatureDisplay;
