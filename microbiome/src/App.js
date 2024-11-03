import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';

function App() {

  const [selectedOrganism, setSelectedOrganism] = useState(null);
  const [organsims , setOrganisms] = useState([]);
  const [organismData, setOrganismData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/species')
      .then((response) => {
        console.log('Response from server: ');
        console.log(response);
        setOrganisms(response.data.species);
        setSelectedOrganism(response.data.species[0]);
      }
      )
      .catch((error) => console.log(error));
  }
  , []);

  useEffect(() => {
    if (selectedOrganism) {
      axios.get(`http://127.0.0.1:5000/data/${selectedOrganism}`)
        .then((response) => {
          console.log('Data for selected organism: ', response.data);
          setOrganismData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedOrganism]); // Fetch data when selectedOrganism changes

  useEffect(() => {
    console.log('Selected organism: ', selectedOrganism);
    console.log('Organism data: ', organismData);
  }
  , [selectedOrganism, organismData]);

  return (
    <>

    <h1>CS 506: Predicting Ogranism Abbundance based of pH & temperature</h1>

      <Autocomplete
        options={organsims}
        getOptionLabel={(option) => option}
        value={selectedOrganism}
        onChange={(event, newValue) => setSelectedOrganism(newValue)}
        renderInput={(params) => <TextField {...params} label="Select Organism" variant="outlined" />}
      />

    
    </>
  );
}

export default App;
