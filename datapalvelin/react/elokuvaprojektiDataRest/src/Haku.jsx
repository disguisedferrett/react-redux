import {useState} from 'react';

import Elokuva from './Elokuva.jsx';

function Haku(){

    const [hakutulos, setHakutulos]=useState([]);
    const [hakuehto, setHakuehto] = useState('');

    const perusUrl ='http://localhost:3004/elokuvat/ehdolla?id=';
    const kuvaUrl ='http://localhost:3004/elokuvat/kuvat?nimi=';

    async function hae(ehto){
        const data = await fetch(`${perusUrl}${ehto}`,{mode:'cors'});
        const elokuvat=await data.json();
        // console.log(tuotteet)
        setHakutulos(elokuvat);
        setHakuehto('');
    }

    return (
        <>
            <div className='Haku'>
                <h1>Elokuvahaku</h1>
                <input placeholder="Anna elokuvan id"
                value={hakuehto}
                onChange={e=>setHakuehto(e.target.value)}
                onKeyUp={e=>{
                    if(e.key==='Enter'){
                        setHakuehto(e.target.value);
                        hae(hakuehto);
                    }
                }}/>

                <button onClick={()=>hae(hakuehto)}>Hae</button>
            </div>
            {
                hakutulos?.length>0 ?
                (
                    <div>
                        <Elokuva kuvaurl={kuvaUrl} elokuvatiedot={hakutulos[0]} />
                    </div>
                ):
                (
                    <div>
                        <h2>Elokuvaa ei löydy</h2>
                    </div>
                )
            }
        </>
    )
}

export default Haku;