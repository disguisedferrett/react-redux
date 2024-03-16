import { Tuotekortti } from "./tuotekomponentti.js";
import { Kori } from "../ostoskorikomponentti/korikomponentti.js";
import { Korinaytto } from "../korinayttokomponentti/korinaytto.js";
import { KasvattajaNaytolla } from "../kasvattajakomponenttikorinaytolla/kasvattajakomponenttikorinaytolla.js"


export class Tuotekori extends HTMLElement{
    constructor(tuote){
        super();

        this.shadow = this.attachShadow({mode:'open'});
      
        this.tuotekortti=Tuotekortti.luo(tuote);
        this.tuotekortti.style.margin='1em';
        this.kasvattaja=new KasvattajaNaytolla();
        const div=document.createElement('div');
        div.style.display='grid';
        div.style.justifyItems='center';
        div.style.width='fit-content';
        div.appendChild(this.tuotekortti);
        div.appendChild(this.kasvattaja);

        this.shadow.appendChild(div);
    }


    get lukumaara(){
        return +this.kasvattaja.määrä;
    }

    get merkki(){
        return this.tuotekortti.merkki;
    }

}

try{
    customElements.define('tuote-kori',Tuotekori);
}
catch(virhe){
    console.log(`Oli jo määritelty: ${virhe.message}`);
}