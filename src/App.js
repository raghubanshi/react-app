import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://18.224.25.80/api/data/')
      .then(response => {
        setData(response.data);
        console.log(response/data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        {data ? (
          <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>City: {data.city}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
