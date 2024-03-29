import { Tuoterivi } from "/js/webkomponentit/tuoterivi.js";
import { Nimilomake } from "/js/webkomponentit/nimikomponentti.js";

document.addEventListener('DOMContentLoaded', alusta);

let nimilomake;
let tulosalue;

function alusta(){
    console.log('alusta')
    nimilomake = document.querySelector('nimi-lomake');
    tulosalue = document.querySelector('section');
    nimilomake.addEventListener('valmis', hae);
}

async function hae(){
    console.log('hae')
    const etunimi=nimilomake.etunimi;
    const sukunimi = nimilomake.sukunimi;
    const reitti = `http://localhost:3004/tilauksetnimella/${etunimi}/${sukunimi}`;
    console.log(reitti);
    try{
        const data = await fetch(reitti, {mode:'cors'});
        const tilaukset=await data.json();
        const h2=document.createElement('h2');
        tulosalue.innerHTML='';
        console.log(tilaukset);
        if(tilaukset.viesti){
            const otsikko=h2.cloneNode(true);
            otsikko.textContent=tilaukset.viesti;
            tulosalue.appendChild(otsikko);
        }
        else{
            let aktiivinenTilausnro=0;
            const tuoterivi = document.createElement('tuote-rivi');//tai new Tuoterivi()
            for(const tilaus of tilaukset){
                if(aktiivinenTilausnro!==tilaus.tilausid){
                    aktiivinenTilausnro=tilaus.tilausid;
                    const otsikko = h2.cloneNode(true);
                    otsikko.textContent=`Tilausnumero: ${aktiivinenTilausnro}:`;
                    tulosalue.appendChild(otsikko);
                }
                const tilausrivi = tuoterivi.cloneNode(true);
                tilausrivi.setAttribute('nimi',tilaus.nimi);
                tilausrivi.setAttribute('hinta', tilaus.hinta);
                tilausrivi.setAttribute('maara', tilaus.tilausmaara)
                tulosalue.appendChild(tilausrivi);
            }
        }
    }
    catch(virhe){
        console.log(virhe)
    }

}