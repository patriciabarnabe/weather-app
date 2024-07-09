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

const WeeklyForecast: React.FC = () => {
  return (
    <StyledPaper>
      <Typography variant="h6">Previsão da semana</Typography>
      <Box display="flex" justifyContent="space-around" marginTop="20px">
        <DetailItemBox>
          <Typography>Amanhã</Typography>
          <Typography>21° 16°</Typography>
        </DetailItemBox>
        <DetailItemBox>
          <Typography>Sexta-Feira</Typography>
          <Typography>28° 20°</Typography>
        </DetailItemBox>
        <DetailItemBox>
          <Typography>Sábado</Typography>
          <Typography>25° 21°</Typography>
        </DetailItemBox>
        <DetailItemBox>
          <Typography>Domingo</Typography>
          <Typography>20° 14°</Typography>
        </DetailItemBox>
        <DetailItemBox>
          <Typography>Segunda-Feira</Typography>
          <Typography>24° 18°</Typography>
        </DetailItemBox>
      </Box>
    </StyledPaper>
  );
};

export default WeeklyForecast;
