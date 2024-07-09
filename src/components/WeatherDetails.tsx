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

const WeatherDetails: React.FC = () => {
  return (
    <DetailsBox>
      <DetailItemBox>
        <Typography>Vento</Typography>
        <Typography>17 km/h</Typography>
      </DetailItemBox>
      <DetailItemBox>
        <Typography>Umidade</Typography>
        <Typography>31%</Typography>
      </DetailItemBox>
      <DetailItemBox>
        <Typography>Chuva</Typography>
        <Typography>10%</Typography>
      </DetailItemBox>
    </DetailsBox>
  );
};

export default WeatherDetails;
