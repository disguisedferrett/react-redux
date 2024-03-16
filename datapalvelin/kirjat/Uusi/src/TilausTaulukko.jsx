import Kirjalomake from "./Kirjalomake";

function TilausTaulukko({ tilaukset }) {
  return (
    <div className='TilausTaulukko'>
      <table>
        <thead>
          <tr>
            <th>Tilausnumero</th>
            <th>Nimi</th>
            <th>Hinta</th>
            <th>Määrä</th>
            <th>Yhteensä</th>

          </tr>
        </thead>
        <tbody>
          {tilaukset.map((tilaus) => (
            <tr key={tilaus.id}>
              <td>{tilaus.id}</td>
              <td>{tilaus.nimi}</td>
              <td>{tilaus.hinta}</td>
              <td>{tilaus.määrä}</td>
              <td>{(tilaus.hinta * tilaus.määrä).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <label>
        Yhteensä:{tilaukset.reduce((summa, tilaus) => {
          return summa + tilaus.hinta * tilaus.määrä;
        }, 0).toFixed(2)} €
      </label>
      <Kirjalomake data={tilaukset}/>
    </div>
  );
}

export default TilausTaulukko;
