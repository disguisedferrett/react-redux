import './Elokuvarivi.css';

function Elokuvarivi({kuvaurl, elokuvatiedot}){

    return (
        <tr className='Elokuvarivi'>
            <td>{elokuvatiedot.id}</td>
            <td>{elokuvatiedot.nimi}</td>
            <td>{elokuvatiedot.ohjaaja}</td>
            <td>{elokuvatiedot.vuosi} </td>
            <td> {elokuvatiedot.tyyppi}</td>
            <td> {elokuvatiedot.arvostelu}</td>
            <td><img src={kuvaurl + elokuvatiedot.kuva} alt={elokuvatiedot.kuva} /></td>
        </tr>
    )
}

export default Elokuvarivi;