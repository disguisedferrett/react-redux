const template=document.createElement('template');

template.innerHTML=`
    <style>
        :host{
            display:block;
            border: outset 6px grey;
            border-radius:0.5em;
            box-shadow:0.2em 0.2em 0.3em rgb(0,0,0);
            background-color:#302e2e;
            padding:0.5em;
            width:fit-content;
            color:white;
        }
        #tuote1{
            display:grid;
            align-items: center;
            justify-items:left;
            margin:0.5em;
        }
        img{
            border-radius:0.5em;
        }

        .piiloon{
            width:200px;
            height:300px;
            background-color:grey;
            border-radius:0.5em;
        }
        #värit{
            float:right;
        }

        #tyyppi{
            width:100%
            float:left;
        }
        #tyyppi, #merkki{
            font-weight:bold;
        }
        textarea::selection{
            background-color: transparent;
        }
        #merkki:focus{
            outline: none;
        }
        #merkki{
            resize:none;
            border:none;
            background-color: transparent;
            color:white;
            padding:0;
            font-size:14pt;
            word-wrap:break-word;
            width:100%;
            white-space:normal;
            owerflow-w
        }
    </style>

    <div id="tuote">
            <p id = "tuoteid"></p>
            <p id = "valmistaja"></p>
            <p id= "tyyppi"></p>
            <p id= "värit"></p>
            <p id= "merkki"></p>
            <p>hinta: <span id= "hinta"></span>€</p>
            <p id= "lisätiedotkulutus"></p>
            <p id= "lisätiedotkommentti"></p>
            <p id= "lisätiedotmalli"></p>
    
    </div>
`;


export class Tuotekortti extends HTMLElement{
    #idkentta;
    #merkkikentta;
    #tyyppikentta;
    #hintakentta;
    #valmistajakentta;
    #väritkentta;
    #lisätiedotkulutuskentta;
    #lisätiedotkommenttikentta;
    #lisätiedotmallikentta;
    

    constructor(){
        super();

        this.shadow=this.attachShadow({mode:'open'});
        this.shadow.appendChild(template.content.cloneNode(true));
        this.#idkentta=this.shadow.getElementById('tuoteid');
        this.#merkkikentta=this.shadow.getElementById('merkki');
        this.#tyyppikentta=this.shadow.getElementById('tyyppi');
        this.#hintakentta=this.shadow.getElementById('hinta');
        this.#valmistajakentta=this.shadow.getElementById('valmistaja');
        this.#väritkentta=this.shadow.getElementById('värit');
        this.#lisätiedotkulutuskentta=this.shadow.getElementById('lisätiedotkulutus');
        this.#lisätiedotkommenttikentta=this.shadow.getElementById('lisätiedotkommentti');
        this.#lisätiedotmallikentta=this.shadow.getElementById('lisätiedotmalli');
       
    }

    //js rajapinta
    get merkki(){
        return this.getAttribute('merkki');
    }

    set merkki(uusi){
        this.setAttribute('merkki',uusi);
    }

    get tyyppi(){
        return this.getAttribute('tyyppi');
    }

    set tyyppi(uusi){
        this.setAttribute('tyyppi',uusi);
    }

    get hinta(){
        return this.getAttribute('hinta');
    }

    set hinta(uusi){
        this.setAttribute('hinta',uusi);
    }

    get valmistaja(){
        return this.getAttribute('valmistaja');
    }

    set valmistaja(uusi){
        this.setAttribute('valmistaja',uusi);
    }

    get värit(){
        this.getAttribute('värit');
    }

    set värit(uusi){
        this.setAttribute('värit', uusi);
    }

    get lisätiedotkulutus(){
        return this.getAttribute('lisätiedotkulutus');
    }

    set lisätiedotkulutus(uusi){
        this.setAttribute('lisätiedotkulututs',uusi);
    }

    get lisätiedotkommentti(){
        return this.getAttribute('lisätiedotkommentti');
    }

    set lisätiedotkommentti(uusi){
        this.setAttribute('lisätiedotkommentti',uusi);
    }

    get lisätiedotmalli(){
        return this.getAttribute('lisätiedotmalli');
    }

    set lisätiedotmalli(uusi){
        this.setAttribute('lisätiedotmalli',uusi);
    }

    paivita(tuote){
        this.merkki=tuote.merkki;
        this.tyyppi=tuote.tyyppi;
        this.hinta=tuote.hinta;
        this.tyyppi=tuote.tyyppi;
        this.valmistaja=tuote.valmistaja;
        this.värit=tuote.värit;
        this.lisätiedotkulutus=tuote.lisätiedot.kulutus;
        this.lisätiedotkommentti=tuote.lisätiedot.kommentti;
        this.lisätiedotmalli=tuote.lisätiedot.malli;
    }

    static luo(tuote){
        const tuotteet=new Tuotekortti();
        tuotteet.paivita(tuote);
        return tuotteet;
    }

    //attribuuttirajapinta
    static get observedAttributes(){
        return ['merkki','tyyppi','hinta','valmistaja','värit', 'lisätiedotkulututs','lisätiedotkommentti','lisätiedotmalli'];
    }

    attributeChangedCallback(attribuutti,vanha,uusi){
        console.log(attribuutti, vanha, uusi);

        switch(attribuutti){
            case 'tuoteid':this.#idkentta.textContent=uusi;break;
            case 'merkki':this.#merkkikentta.textContent=uusi;break;
            case 'tyyppi': this.#tyyppikentta.textContent=uusi;break;
            case 'hinta':this.#hintakentta.textContent=uusi;break;
            case 'valmistaja':this.#valmistajakentta.innerText=uusi;break
            case 'värit':this.#väritkentta.innerText=uusi;break;
            case 'lisätiedotkulutus':this.#lisätiedotkulutuskentta.textContent=uusi;break;
            case 'lisätiedotkommentti':this.#lisätiedotkommenttikentta.textContent=uusi;break;
            case 'lisätiedotmalli':this.#lisätiedotmallikentta.textContent=uusi;break;

        }
    }
} //luokan loppu


try{
    customElements.define('tuote-kortti',Tuotekortti);
}
catch(virhe){
    console.log(`Oli jo määritelty: ${virhe.message}`);
}