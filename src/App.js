import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [repos, setrepos] = useState([{}]);

  useEffect(async () => {

    async function fetchData() {

    const response = await fetch('https://api.github.com/users/sheikhSahal/repos');
    const data = await response.json();
    setrepos(data);
    console.log(data)
    }

    fetchData();

  }, [])

  return (
    <div className="App">
      <h3>Git Hub Repositories</h3>
      {repos.map((resobj, idx) => {
        return (
          <div key={idx}>
            <span>{resobj.name}</span> <br />
          </div>
        )
      })}
    </div>
  );
}

export default App;

