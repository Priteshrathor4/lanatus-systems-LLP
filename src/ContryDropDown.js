import React, { useState } from 'react';
import { Grid, List, ListItem, Typography, styled } from '@mui/material';

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [states, setStates] = useState(['Goa']);

  const countries = [
    {
      name: 'Australia',
      states: ['New South Wales', 'Queensland', 'Victoria']
    },
    {
      name: 'India',
      states: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Goa', 'Gujarat']
    },
    {
      name: 'United States',
      states: ['California', 'New York', 'Texas']
    }
  ];

  const handleCountryClick = (countryName, countryStates) => {
    setSelectedCountry(countryName);
    setStates(countryStates);
  };

  const HighlightedListItem = styled(ListItem)(({ theme }) => ({
    backgroundColor:
      selectedCountry === theme.palette.primary.main ? 'pink' : 'inherit'
  }));

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant="h6">List of Countries</Typography>
        <List>
          {countries.map((country, index) => (
            <HighlightedListItem
              key={index}
              onClick={() => handleCountryClick(country.name, country.states)}
              button
              selected={selectedCountry === country.name}
            >
              {country.name}
            </HighlightedListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">States of {selectedCountry}</Typography>
        <List>
          {states.map((state, index) => (
            <ListItem key={index}>{state}</ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default CountryList;
