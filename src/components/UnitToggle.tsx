import React from "react";
import { ToggleButton, ToggleButtonGroup, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

interface UnitToggleProps {
  unit: "metric" | "imperial";
  onToggle: (unit: "metric" | "imperial") => void;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
});

const StyledToggleButton = styled(ToggleButton)({
  color: "#000",
  "&.Mui-selected": {
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
  textTransform: "lowercase",
});

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, onToggle }) => {
  const handleUnitChange = (
    event: React.MouseEvent<HTMLElement>,
    newUnit: "metric" | "imperial"
  ) => {
    if (newUnit !== null) {
      onToggle(newUnit);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <StyledToggleButtonGroup
            value={unit}
            exclusive
            onChange={handleUnitChange}
            aria-label="unidade"
          >
            <StyledToggleButton value="metric" aria-label="metric">
              Celsius
            </StyledToggleButton>
            <StyledToggleButton value="imperial" aria-label="imperial">
              Fahrenheit
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UnitToggle;
