import {useState, useEffect} from 'react';

import Kirja from './Kirja.jsx';

import './App.css';

function Kaikki(){
    const [tulos, setTulos] = useState([]);

    const perusUrlKaikki = 'http://localhost:3009/kirjat';
    const kuvaUrl = 'http://localhost:3009/kirjat/kuvat?nimi=';

    useEffect(()=>{
        const haeKaikki = async ()=>{
            const data = await fetch(perusUrlKaikki,{mode:'cors'});
            const kirjat= await data.json();

           setTulos(kirjat);
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
                            tulos.map(kirja=>
                                (
                                    <Kirja key={kirja.id} kuvaurl={kuvaUrl}
                                    kirjatiedot={kirja} />
                                )
                            )
                        }
                    </div>
                ):
                (
                    <div>
                        <h2>Kirjaa ei löytynyt</h2>
                    </div>
                )
            }

        </div>
    )
}

export default Kaikki;
