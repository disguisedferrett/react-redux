import React from 'react';
import './KirjaLisatiedot.css';
//import kirjatiedot from './Kaikki';

function KirjaLisatiedot({ kirjatiedot }) {
  return (
    <tr className='KirjaLisatiedot'>
      <td colSpan="7">
        <h2>Lisätiedot kirjasta</h2>
        <p><span>Julkaisuvuosi:</span> {kirjatiedot.julkaisuvuosi}</p>
        <p><span>Sivut:</span> {kirjatiedot.sivut}</p>
        <p><span>Kustantaja:</span> {kirjatiedot.kustantaja}</p>
        <p><span>Sidosasu:</span> {kirjatiedot.sidosasu}</p>
        <p><span>ISBN:</span> {kirjatiedot.isbn}</p>
        <p><span>Hinta:</span> {kirjatiedot.hinta}</p>
        <p><span>Tuoteryhmä:</span> {kirjatiedot.tuoteryhmä.join(', ')}</p>
        <p><span>Avainsanat:</span> {kirjatiedot.avainsanat.join(', ')}</p>
        <p><span>Kieli:</span> {kirjatiedot.kieli}</p>
        <p><span>Varastotilanne:</span> {kirjatiedot.varastotilanne}</p>
        <p><span>Kuvaus:</span></p>
        <ul>
          {kirjatiedot.kuvaus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img src={kirjatiedot.kuva} alt={kirjatiedot.nimi} />
      </td>
    </tr>
  );
}

export default KirjaLisatiedot;









