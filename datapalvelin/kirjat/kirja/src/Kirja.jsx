import './Kirja.css';
//import kirjaNumero from './kaikkiAlekkain.jsx';

function Kirja({kuvaurl, kirjatiedot}){

    return (
        <div className='Kirja'>
            <h1>Kirja</h1>
            <p><span>Id:</span> {kirjatiedot.id}</p>
            <p><span>Nimi:</span> {kirjatiedot.nimi}</p>
            <p><span>Tekijä:</span> {kirjatiedot.tekijä}</p>
            <p><span>Hinta €:</span> {kirjatiedot.hinta} </p>
            <p><span>Kuvaus:</span> {kirjatiedot.kuvaus}</p>
            <img src={kuvaurl+kirjatiedot.kuva} alt={kirjatiedot.kuva} />
        </div>
    )
}

export default Kirja;