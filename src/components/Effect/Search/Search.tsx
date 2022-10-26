import { Box, TextField, Typography } from "@mui/material";
import { countriesData } from "components/Effect/Search/countriesData";
import React, { useState } from "react";

const initialCountriesList = countriesData;

const Search = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([...initialCountriesList]);

  return (
    <Box display="grid" gap={3}>
      <Typography variant="h6">Search in list exercise</Typography>

      <TextField
        label="Search for a country"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <Box display="grid" gap={1}>
        {countries.map((country, index) => {
          return <Typography key={index}>{country}</Typography>;
        })}
      </Box>
    </Box>
  );
};

export default Search;
