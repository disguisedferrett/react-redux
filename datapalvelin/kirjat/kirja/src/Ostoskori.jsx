// Ostoskori.jsx
import React, { useState } from 'react';

function Ostoskori() {
  const [ostokset, setOstokset] = useState({});

  const lisaaOstos = (kirjaId) => {
    setOstokset((prevOstokset) => {
      const uudetOstokset = { ...prevOstokset };
      uudetOstokset[kirjaId] = (uudetOstokset[kirjaId] || 0) + 1;
      return uudetOstokset;
    });
  };

  const vahennaOstos = (kirjaId) => {
    setOstokset((prevOstokset) => {
      const uudetOstokset = { ...prevOstokset };
      if (uudetOstokset[kirjaId] > 0) {
        uudetOstokset[kirjaId] -= 1;
      }
      return uudetOstokset;
    });
  };

  return (
    <div>
      <h2>Ostoskori</h2>
      <ul>
        {Object.entries(ostokset).map(([kirjaId, maara]) => (
          <li key={kirjaId}>
            Kirja ID: {kirjaId}, Määrä: {maara}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ostoskori;
