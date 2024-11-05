import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Autocomplete, TextField, Slider } from '@mui/material';
import Graph from './graph'; // Import the Graph component


function App() {

  const [selectedOrganism, setSelectedOrganism] = useState(null);
  const [organsims , setOrganisms] = useState([]);
  const [organismData, setOrganismData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // New state for selected index

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/species')
      .then((response) => {
        console.log('Response from server: ');
        console.log(response);
        // Assuming the data is inside 'species' field
        const data = response.data || [];
        console.log("Organism data structure:", data);  // Log the structure of the response data


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

  console.log("Type of organismData:", typeof organismData);


   // Select the i-th element from organismData if available
   const iThData = organismData.length > 0 && organismData[selectedIndex] ? {
    labels: [organismData[selectedIndex].soilTemp], // Single data point for X-axis (soilTemp)
    datasets: [
      {
        label: 'Organism Abundance (%)',
        data: [organismData[selectedIndex].percentage], // Single data point for Y-axis (abundance percentage)
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  } : null;


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

     {/* Render the Graph component */}
     {iThData ? <Graph data={iThData} /> : <p>No data available for the selected organism or index.</p>}
    </>
  );
}

export default App;
