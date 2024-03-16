import { useState } from 'react'
import Poistonappi from './Poistonappi';
import Lataaja from './Lataaja';

import "./Kirjalomake.css";

const talletusURL = 'http://localhost:4010/rest/tilaukset'
const tilausURL = 'http://localhost:3010/tilaukset/arvot?avain=tilausnumero'

function Kirjalomake({ data, paivita }) {

  function tallennaData(dataJson){
    console.log('moi', dataJson);
    return new Promise(async(resolve,reject)=>{
        const optiot = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(dataJson)
        };
        console.log(`${talletusURL}/${dataJson.tilausnumero}`);
        const tulos = await fetch(`${talletusURL}/${dataJson.tilausnumero}`, optiot);
        if(tulos.ok) {
            resolve(await tulos.json());
        }
        else{
            reject({viesti:'Lisäys ei onnistunut', tyyppi:'virhe'});
        }
    });
  }

  async function laheta(e) {
    e.preventDefault();
    const numerot = await fetch(tilausURL, {mode:'cors'});
    const numerotJSON = await numerot.json();
    const seuraavaTilausnro = Math.max(...numerotJSON, 0) + 1;
    const lomakeData = new FormData(e.target);
    const dataJson = Object.fromEntries(lomakeData.entries());
    const tilauspvm = dataJson.tilauspvm;
    delete dataJson.tilauspvm;
    const tilaus = {}
    tilaus.tilausnumero = seuraavaTilausnro;
    tilaus.tilauspvm = tilauspvm;
    tilaus.tilaaja = dataJson;
    console.log(tilaus);
    console.log(data);
    tilaus.tuotteet = [];

    for (const key of data) {

      const tuotenumero = key.id;
      const tuote = {
        tuotenumero: parseInt(tuotenumero),
        nimi: key.nimi,
        määrä: key.määrä,
        hinta: key.hinta
      };
      tilaus.tuotteet.push(tuote);

    }
    

    console.log(tilaus);

     try{
       const tulos = await tallennaData(tilaus);
       console.log(tulos);
       alert('talletettu');
     }
     catch(virhe){
       console.log(virhe);
     }
     
    //  paivita();
  }

  function tanaan() {
    const nyt = new Date(Date.now());
    const [pvm,] = nyt.toISOString().split('T');
    return pvm
  }

  return (
    <div className='Kirjalomake'>
      <form onSubmit={laheta} >
        <div className='kentat'>
          <label>Tilauspvm: <input type='text' name='tilauspvm' value={tanaan()} readOnly /></label>
          <label>Etumimi: <input name="etunimi" /></label>
          <label>Sukunimi: <input name="sukunimi" /></label>
          <label>Katuosoite: <input name="katuosoite" /></label>
          <label>Postitoimipaikka: <input name="postitoimipaikka" /></label>

          {/* <Lataaja paivita={valitse}/> */}

        </div>
        <div className='napit'>
          <button type="submit">Lähetä</button>
          {/* <Poistonappi id={data.numero} paivita={paivita} /> */}
        </div>

      </form>
    </div>
  )
}

export default Kirjalomake
