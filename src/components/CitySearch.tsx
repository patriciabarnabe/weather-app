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
} from "@mui/material";
import { getCode, getNames } from "country-list";
import InstructionModal from "./InstructionModal";

interface CitySearchProps {
  onSearch: (city?: string, country?: string) => void;
}

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mb: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Buscar por Cidade e País
      </Typography>
      <TextField
        label="Digite o nome da cidade (opcional)"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel>Selecione o país (opcional)</InputLabel>
        <Select
          value={country}
          onChange={(e) => setCountry(e.target.value as string)}
          label="Selecione o país (opcional)"
        >
          {countryNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Buscar
      </Button>
      {showInstructions && (
        <InstructionModal
          open={showInstructions}
          onClose={() => setShowInstructions(false)}
        />
      )}
    </Box>
  );
};

export default CitySearch;
