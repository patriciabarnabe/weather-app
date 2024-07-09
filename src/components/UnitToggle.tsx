import React from "react";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";

interface UnitToggleProps {
  unit: string;
  onToggle: (unit: string) => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, onToggle }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <ToggleButtonGroup
        value={unit}
        exclusive
        onChange={(e, newUnit) => onToggle(newUnit)}
        aria-label="unit toggle"
      >
        <ToggleButton value="metric" aria-label="celsius">
          Celsius
        </ToggleButton>
        <ToggleButton value="imperial" aria-label="fahrenheit">
          Fahrenheit
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default UnitToggle;
