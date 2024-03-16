import { useState } from 'react';

function Kasvattaja({ muutos, id, nimi, hinta }) {
  const [maara, setMaara] = useState(0);

  function lisaa() {
    const uusi=maara+1
    setMaara(uusi);
    muutos(id, {id, nimi, hinta, määrä:uusi});
  }

  function vahenna() {
    if (maara > 0) {
      const uusi=maara-1
      setMaara(uusi);
      muutos(id, {id, nimi, hinta, määrä:uusi});
    }
  }

  return (
    <div>
      <button onClick={vahenna}>-</button>
      <span>{maara}</span>
      <button onClick={lisaa}>+</button>
    </div>
  );
}

export default Kasvattaja;
