// src/components/QueryInput.js
import React, { useState } from 'react';

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
        id="query-input"
      />
      <button type="submit" id="submit-button">Submit</button>
    </form>
  );
};

export default QueryInput;
