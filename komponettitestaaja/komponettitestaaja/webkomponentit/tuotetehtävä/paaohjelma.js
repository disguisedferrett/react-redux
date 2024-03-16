import { Tuotekortti } from "./tuotekomponentti.js";
import { Kori } from "../ostoskorikomponentti/korikomponentti.js";
import { Korinaytto } from "../korinayttokomponentti/korinaytto.js";
import { KasvattajaNaytolla } from "../kasvattajakomponenttikorinaytolla/kasvattajakomponenttikorinaytolla.js"
import { Tuotekori } from "./tuotekori.js";

document.addEventListener('DOMContentLoaded', alusta);

const tuotekortit=[];

async function alusta(){
    const tuoteDiv=document.getElementById('tuotteet');
    document.getElementById('valmis').addEventListener('click', valmis);

    try{
        const data = await fetch('http://localhost:3008/tuotteet',{mode:'cors'});
        const tuotteet=await data.json();
        console.log(tuotteet)
        for(const tuote of tuotteet){
            const tuote1 = new Tuotekori(tuote);
            tuotekortit.push(tuote1);
            tuoteDiv.appendChild(tuote1);
        }

    }
    catch(virhe){
        console.log(virhe);
    }

}
function valmis(){
    const pre=document.querySelector('pre');
    pre.textContent=tuotekortit
        .filter(alkio=>alkio.lukumaara>0)
        .map(kortti=>`${kortti.merkki}: \t\t${kortti.lukumaara} kappaletta`)
        .join('\n');
}