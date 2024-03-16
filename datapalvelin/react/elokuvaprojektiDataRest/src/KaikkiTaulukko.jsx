import {useState, useEffect} from 'react';

import Elokuvarivi from './Elokuvarivi.jsx';

import './KaikkiTaulukko.css';

function KaikkiTaulukko(){
    const [tulos, setTulos] = useState([]);

    const perusUrlKaikki = 'http://localhost:3004/elokuvat';
    const kuvaUrl = 'http://localhost:3004/elokuvat/kuvat?nimi=';

    useEffect(()=>{
        const haeKaikki = async ()=>{
            const data = await fetch(perusUrlKaikki,{mode:'cors'});
            const elokuvat= await data.json();

           setTulos(elokuvat);
        }

        haeKaikki();
    },[]);

    return (
        <div className='Kaikki'>
            {
                tulos?.length>0 ?
                (
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nimi</th>
                                <th>ohjaaja</th>
                                <th>vuosi</th>
                                <th>tyyppi</th>
                                <th>arvostelu</th>
                                <th>Kuva</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            tulos.map(elokuva=>
                                (
                                    <Elokuvarivi key={elokuva.id} kuvaurl={kuvaUrl}
                                    elokuvatiedot={elokuva} />
                                )
                            )
                        }
                        </tbody>
                    </table>
                ):
                (
                    <div>
                        <h2>Elokuvaa ei löytynyt</h2>
                    </div>
                )
            }

        </div>
    )
}

export default KaikkiTaulukko;
