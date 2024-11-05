import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ data }) => {
  if (!data || !data.labels || !data.datasets) {
    console.log("No data available for the graph.");
    return <p>No data available to plot.</p>;
  }

  console.log("Graph data:", data); // Debugging: log the data passed to the graph

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Soil Temperature (°C)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Abundance (%)',
        },
        min: 0, // Ensure Y-axis starts from 0
      },
    },
  };

  // If there's no data, display a message
  if (!data || !data.labels || !data.datasets) {
    return <p>No data available for the selected organism.</p>;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto', paddingTop: '20px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
