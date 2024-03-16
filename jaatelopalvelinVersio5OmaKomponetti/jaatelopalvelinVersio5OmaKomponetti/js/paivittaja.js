import {Tiedot} from "./tietokomponentti.js";


customElements.define('tiedot-elementti',Tiedot);

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta(){
        const tiedot=document.getElementById('eka');
        tiedot.html='Kattila';//käyttää setteriä
        //tiedot.setAttribute('nimi','Kattila');
        const uusiTieto=document.createElement('tiedot-elementti');
        uusiTieto.nimi='uusi nimi';
        uusiTieto.hinta=23;
        uusiTieto.kuvapolku='/kuvat.testi.png';
        document.querySelector('main').appendChild(uusiTieto);

        const toka=new Tiedot();
        toka.nimi='toka';
        toka.hinta=45;
        toka.kuvapolku='';
        toka.tausta('red')
        document.querySelector('main').appendChild(toka);

    }


       

      

    function muodostaJaatelovalinta(jaatelolajit){
        if(!jaatelolajit || jaatelolajit.virhe){
            tyhjennaTulos();
            naytaVirhe('jäätelöä ei löytynyt');
        }
        else{
            jaatelovalinta.setAttribute('data-valinnat',jaatelolajit.join());
            jaatelovalinta.addEventListener('valittu',valitse);
            jaatelolajit.value='';
        }
    } //muodostaJaatelovalinta loppu

    async function valitse(){
        const jaatelo=jaatelovalinta.valittu;
        if(jaatelo.length>0){
            try{
                const data = await fetch(`/jäätelö/${jaatelo}`);
                const tulos = await data.json();
                // console.log(tulos)
                paivita(tulos);
            }
            catch(err){
                tyhjennaTulos();
                naytaVirhe('Haku ei onnistunut');
            }
        }
        else {
            tyhjennaTulos();
        }
    } //valitse loppu


    function paivita(data){
        tyhjennaTulos();
        if(!data){
            naytaVirhe('ohjelmointivirhe. Anteeksi!');
        }
        else if(data.virhe){
           naytaVirhe(data.virhe)
        }
        else if(data.nimi && data.nimi.length>0){
            paivitaTiedot(data);
            if(!tiedot.isConnect){
                tyhjennaTulos();
                tulosalue.appendChild(tiedot);
            }
        }
    } //paivita

    function naytaVirhe(viesti){
        virheElementti.setAttribute('data-viesti',viesti);
        if(!virheElementti.isConnect){
            tyhjennaTulos();
            tulosalue.appendChild(virheElementti);
        }
        
    }

    function tyhjennaTulos(){
        for(const lapsisolmu of tulosalue.children){
            tulosalue.removeChild(lapsisolmu);
        }
    }

    function paivitaTiedot(data){
        tiedot.setAttribute('data-nimi',data.nimi);
        tiedot.setAttribute('data-hinta', data.hinta);
        if(data.kuva && data.kuva.length>0){
            tiedot.setAttribute('data-kuvapolku',`/kuvat/${data.kuva}`);
        }
        else{
            tiedot.setAttribute('data-kuvapolku','');
        }  
    }

