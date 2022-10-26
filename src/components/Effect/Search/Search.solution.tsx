import { Box, TextField, Typography } from "@mui/material";
import { countriesData } from "components/Effect/Search/countriesData";
import useDebounceValue from "hooks/useDebounceValue";
import React, { useEffect, useState } from "react";

const initialCountriesList = countriesData;

const Search = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([...initialCountriesList]);
  const debouncedSearch = useDebounceValue(search, 300);

  useEffect(() => {
    if (!debouncedSearch) {
      setCountries([...initialCountriesList]);
      return;
    }

    const result = initialCountriesList.filter((countryName) => {
      const indexOf = countryName.toLowerCase().indexOf(debouncedSearch.toLowerCase());
      return indexOf >= 0;
    });
    setCountries([...result]);
  }, [debouncedSearch]);

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
