const template = document.createElement('template');
template.innerHTML=`
<style>
    :host{
        display:inline-block;
        padding:0;
        margin:0;
    }
    canvas{
        padding:0;
        margin:0;
    }
    </style>
    <canvas>
        <span>&#x1F6D2;</span> 
    </canvas>`
    







export class Kori extends HTMLElement {
    #shadow;
    #piirtoalusta;
    #konteksti;
    #viivanPaksuus = 1;

    #tausta = '#00000000';
    #runkovari = 'black';
    #tayttovari = 'grey';

    constructor(){
        super();
        this.#shadow=this.attachShadow({mode:'open'});
        this.#shadow.appendChild(template.content.cloneNode(true));
        this.#piirtoalusta=this.#shadow.querySelector('canvas');
        this.#konteksti=this.#piirtoalusta.getContext('2d');
        this.#piirtoalusta.width=Math.max(30,this.#piirtoalusta.width/70);
        this.#piirtoalusta.height = this.#piirtoalusta.width;
        this.#viivanPaksuus=Math.max(Math.floor(this.#piirtoalusta.width/70));

    }

    //getterit ja setterit
    get leveys(){
        return this.getAttribute('leveys');
    }

    set leveys(uusileveys){
        this.setAttribute('leveys',uusileveys);
    }

    get tausta(){
        return this.getAttribute('tausta');
    }

    set tausta(vari){
        this.setAttribute('tausta', vari);
    }

    get runkoväri(){
        return this.getAttribute('runkoväri');
    }

    set runkoväri(vari){
        this.setAttribute('runkoväri',vari);
    }

    get täyttöväri(){
        return this.getAttribute('täyttöväri');
    }

    set täyttöväri(vari) {
        this.setAttribute('täyttöväri',vari);
    }

    static get observedAttributes(){
        return ['leveys', 'tausta', 'runkoväri', 'täyttöväri'];
    }

    attributeChangedCallback(attribuutti, vanha, uusi){
        console.log(attribuutti, vanha, uusi);
        if(attribuutti==='leveys'){
            this.#piirtoalusta.width=Math.max(30,+uusi);
            this.#piirtoalusta.height = this.#piirtoalusta.width;
            this.#viivanPaksuus=Math.max(Math.floor(this.#piirtoalusta.width/70));
        }
        else if(attribuutti==='tausta'){
            this.#tausta=uusi;
        }
        else if(attribuutti==='runkoväri'){
            this.#runkovari=uusi;
        }
        else if(attribuutti==='täyttöväri'){
            this.#tayttovari=uusi;
        }

        this.piirraKori(this.#konteksti);
    }
    

    piirraKori(konteksti){
        const koko = this.#piirtoalusta.width;
        const ruutu=Math.floor(koko/7);
    
        konteksti.save();
    
        konteksti.fillStyle = this.#tausta;
        konteksti.fillRect(0, 0, koko, koko);
    
        konteksti.translate(this.#viivanPaksuus+2, 0);
    
        konteksti.lineWidth=this.#viivanPaksuus+2;
    
        konteksti.beginPath();
        konteksti.strokeStyle = this.#tayttovari;
    
        //korin vaakaviivat
        konteksti.moveTo(0,2*ruutu);
        konteksti.lineTo(5*ruutu,2*ruutu);
        konteksti.moveTo(0,3*ruutu);
        konteksti.lineTo(5*ruutu,3*ruutu);
        //korin pystyviivat
        for(let i=0; i<5;i++){
            konteksti.moveTo(i*ruutu,ruutu);
            konteksti.lineTo(i*ruutu, 4*ruutu);
        }
    
    
    
    
        konteksti.stroke();
    
        //kehys ja kahva
        konteksti.strokeStyle=this.#runkovari;
        konteksti.lineWidth=this.#viivanPaksuus+1;
        konteksti.strokeRect(0,ruutu,5*ruutu,3*ruutu,3*ruutu);
        konteksti.moveTo(5*ruutu,ruutu);
        konteksti.lineTo(5.5*ruutu,0);
        konteksti.lineTo(6.5*ruutu,0);
        konteksti.moveTo(4.5*ruutu,4*ruutu);
        konteksti.lineTo(4*ruutu,5.5*ruutu);
        konteksti.lineTo(ruutu, 5.5*ruutu);
    
    
        
        konteksti.stroke();
    
    
        konteksti.restore();

        konteksti.beginPath();
        konteksti.arc(4 * ruutu, 5.5 * ruutu, ruutu / 2, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        konteksti.beginPath();
        konteksti.arc(1.5 * ruutu, 5.5 * ruutu, ruutu / 2, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        konteksti.restore()
}
}
try{
    customElements.define('ostos-kori', Kori);
}

catch(virhe){
    console.log(`Ostoskori oli jo määritelty: ${virhe.message}`);

}