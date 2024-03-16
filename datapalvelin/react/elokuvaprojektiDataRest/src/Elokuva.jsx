import './Elokuva.css';
import elokuvaNumero from './KaikkiAlekkain.jsx';

function Elokuva({kuvaurl, elokuvatiedot, elokuvaNumero}){

    return (
        <div className='Elokuva'>
            <h1>Elokuva {elokuvaNumero}</h1>
            <p><span>Id:</span> {elokuvatiedot.id}</p>
            <p><span>Nimi:</span> {elokuvatiedot.nimi}</p>
            <p><span>Ohjaaja:</span> {elokuvatiedot.ohjaaja}</p>
            <p><span>Vuosi:</span> {elokuvatiedot.vuosi} </p>
            <p><span>Tyyppi:</span> {elokuvatiedot.tyyppi}</p>
            <p><span>Arvostelu:</span> {elokuvatiedot.arvostelu}</p>
            <img src={kuvaurl+elokuvatiedot.kuva} alt={elokuvatiedot.kuva} />
        </div>
    )
}

export default Elokuva;