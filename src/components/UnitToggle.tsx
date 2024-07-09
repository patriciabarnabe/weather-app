import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Typography,
} from "@mui/material";

interface UnitToggleProps {
  unit: "metric" | "imperial";
  onToggle: (unit: "metric" | "imperial") => void;
}

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
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={handleUnitChange}
          aria-label="unidade"
        >
          <ToggleButton value="metric" aria-label="metric">
            Métrico
          </ToggleButton>
          <ToggleButton value="imperial" aria-label="imperial">
            Imperial
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default UnitToggle;
