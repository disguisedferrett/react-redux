import {useState, useEffect} from 'react';

import Elokuva from './Elokuva.jsx';

import './App.css';

function Kaikki(){
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
                    <div>
                        {
                            tulos.map(elokuva=>
                                (
                                    <Elokuva key={elokuva.id} kuvaurl={kuvaUrl}
                                    elokuvatiedot={elokuva} />
                                )
                            )
                        }
                    </div>
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

export default Kaikki;
