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

const AirQuality: React.FC = () => {
  return (
    <StyledPaper>
      <Typography variant="h6">Qualidade do ar</Typography>
      <Typography variant="h3">Boa 21</Typography>
    </StyledPaper>
  );
};

export default AirQuality;
