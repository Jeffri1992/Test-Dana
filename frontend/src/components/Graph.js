// src/components/Graph.js
import React, { useEffect } from 'react';
import Sigma from 'sigma';

const Graph = ({ graphData }) => {
  useEffect(() => {
    const container = document.getElementById('sigma-container');
    const sigmaInstance = new Sigma(container);

    sigmaInstance.graph.read(graphData);
    sigmaInstance.refresh();

    return () => sigmaInstance.kill();
  }, [graphData]);

  return <div id="sigma-container" style={{ width: '800px', height: '600px' }} />;
};

export default Graph;
