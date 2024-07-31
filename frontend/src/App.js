// src/App.js
import React, { useState, useEffect } from 'react';
import Graph from './components/Graph';
import QueryInput from './components/QuerryInput';

function App() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [response, setResponse] = useState('');

  const fetchGraphData = async () => {
    const response = await fetch('/api/graph');
    const data = await response.json();
    setGraphData(data);
  };

  useEffect(() => {
    fetch('http://localhost:3000/graph')  // Ensure this URL is correct
      .then(response => response.json())
      .then(data => setGraphData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  const handleQuerySubmit = async (query) => {
    const response = await fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setResponse(data.response);
    fetchGraphData(); // Refresh the graph data
  };

  return (
    <div className="App">
      <QueryInput onSubmit={handleQuerySubmit} />
      <p>Response: {response}</p>
      <Graph graphData={graphData} />
    </div>
  );
}

export default App;
