import { useState, useEffect } from 'react';
import React from 'react';
import './KaikkiTaulukko.css';

function KaikkiTaulukko({ tulos, paivita, selectedRow, lisaaOstos, vahennaOstos }) {
    return (
        <div className='Kaikki'>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nimi</th>
                        <th>Tekijä etunimi</th>
                        <th>Sukunimi</th>
                        <th>Hinta</th>
                        <th>Kuvaus</th>
                        <th>Ostoskori</th>

                        {/* <th>Kuva</th> */}

                    </tr>
                </thead>
                <tbody>
                    {tulos.map((kirjatiedot =>
                        <tr 
                            key={kirjatiedot.id} 
                            id={kirjatiedot.id} 
                            onClick={() => paivita(kirjatiedot.id)}
                            className={selectedRow === kirjatiedot.id ? 'selected-row' : ''}
                        >
                            <td>{kirjatiedot.id}</td>
                            <td>{kirjatiedot.nimi}</td>
                            <td>{kirjatiedot.tekijä.etunimi}</td>
                            <td>{kirjatiedot.tekijä.sukunimi}</td>
                            <td>{kirjatiedot.hinta} </td>
                            <td>{kirjatiedot.kuvaus}</td>
                            {/* <td><img src={kuvaurl + kirjatiedot.kuva} alt={kirjatiedot.kuva} /></td> */}
                            <td>
                                <button onClick={() => lisaaOstos(kirjatiedot.id)}>+</button>
                                <button onClick={() => vahennaOstos(kirjatiedot.id)}>-</button>
                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default KaikkiTaulukko;
