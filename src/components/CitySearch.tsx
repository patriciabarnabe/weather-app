import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Tooltip,
} from "@mui/material";
import { getCode, getNames } from "country-list";
import InstructionModal from "./InstructionModal";
import { styled } from "@mui/system";

interface CitySearchProps {
  onSearch: (city?: string, country?: string) => void;
}

const StyledForm = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "12px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  flexWrap: "wrap",
});

const StyledButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
});

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const countryNames = getNames();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((city && country) || (!city && !country)) {
      onSearch(city, getCode(country) || "");
    } else {
      setShowInstructions(true);
    }
  };

  return (
    <>
      <StyledForm component="form" onSubmit={handleSubmit}>
        <Tooltip title="You can leave this empty if you don't want to search by city">
          <TextField
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ flex: 1 }}
          />
        </Tooltip>
        <FormControl variant="outlined" sx={{ flex: 1, minWidth: 200 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value as string)}
            label="Country"
          >
            {countryNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledButton variant="contained" type="submit">
          Search
        </StyledButton>
      </StyledForm>
      {showInstructions && (
        <InstructionModal
          open={showInstructions}
          onClose={() => setShowInstructions(false)}
        />
      )}
    </>
  );
};

export default CitySearch;
