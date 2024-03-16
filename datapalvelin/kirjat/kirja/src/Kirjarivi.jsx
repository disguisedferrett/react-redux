import './Kirjarivi.css';
import React from 'react';

function Kirjarivi({kuvaurl, kirjatiedot}){
    console.log(kirjatiedot);
    return (
        <tr className='Kirjarivi'>
            <td>{kirjatiedot.id}</td>
            <td>{kirjatiedot.nimi}</td>
            <td>{kirjatiedot.tekijä.etunimi}</td>
            <td>{kirjatiedot.tekijä.sukunimi}</td>
            <td>{kirjatiedot.hinta} </td>
            <td> {kirjatiedot.kuvaus}</td>
            <td><img src={kuvaurl + kirjatiedot.kuva} alt={kirjatiedot.kuva} /></td>
        </tr>
    )
}

export default Kirjarivi;