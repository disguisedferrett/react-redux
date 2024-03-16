import { useState, useEffect } from 'react';

import Elokuva from './Elokuva.jsx';

import './KaikkiAlekkain.css';

function KaikkiAlekkain() {
    const [tulos, setTulos] = useState([]);

    const perusUrlAlekkain = 'http://localhost:3004/elokuvat';
    const kuvaUrl = 'http://localhost:3004/elokuvat/kuvat?nimi=';

    useEffect(() => {
        const haeKaikki = async () => {
            const data = await fetch(perusUrlAlekkain, { mode: 'cors' });
            const elokuvat = await data.json();

            setTulos(elokuvat);
        }

        haeKaikki();
    }, []);

    return (
        <div className='KaikkiAlekkain'>
            {tulos?.length > 0 ? (
                <div>
                    {tulos.map((elokuva, index) => (
                        <Elokuva key={elokuva.id} kuvaurl={kuvaUrl} elokuvatiedot={elokuva} elokuvaNumero={index + 1} />
                    ))}
                </div>
            ) : (
                <div>
                    <h2>Elokuvaa ei löytynyt</h2>
                </div>
            )}
        </div>
    );
}

export default KaikkiAlekkain;
