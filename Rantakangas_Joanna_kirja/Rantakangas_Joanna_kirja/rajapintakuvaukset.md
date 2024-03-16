## Kirjarekisteri -luokka

**constructor(jsondata)**
Alustaa Kirjarekisteri -olion

Parametri `jsondata` on oliolle välitettävä json-taulukko.

Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

### **on_lisätiedot(hakuavain)**
Metodi tarkastaa löytyykö annetun hakuavaimen omaavalta kirja-oliolta lisätiedot-olio
Tarkistaa, onko annetun hakuavaimen `kirjaID` kirjalla lisätiedot.

Parametri hakuavain on haettavan kirjan perusavain `kirjaID`.

Palauttaa `true`, jos lisätiedot löytyi ja se ei ole tyhjä olio, muuten palautetaan `false`. Jos parametri `hakuavain` puuttuu, palautetaan myös `false`.

### **hae_lisätiedot(hakuavain)**
Palauttaa annetulla hakuavaimella `kirjaID` olevan kirjan lisätiedot -olion.

Parametri `hakuavain` on haettavan kirjan perusavain `kirjaID`.

Palauttaa lisätiedot -olion tai null, jos hakuavaimella ei löydy kirja -oliota tai jos hakuavain puuttuu.

### **haeHinta(kirjaID)**
Hakee kirjan hinnan annetulla perusavaimella `kirjaID`.

Kirjan perusavain `kirjaID`.

Palauttaa löydetyn kirjan hinnan.

Jos avaimella ei löydy mitään, aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`.

### **hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija(hakuarvo)**
Hakee kaikkien niiden kirjojen yhteishinnan, joilla on sama kirjailija

`Hakuarvo` -parametri on kirjailija, jonka perusteella kirjojen hinnat lasketaan yhteen.

Palautus on kirjojen yhteenlaskettu kokonaishinta.

Aiheuttaa poikkeuksen `'annetulla avaimella ei löytynyt tietoja'`, jos hakuarvolla ei löydy mitään. Jos parametri `hakuarvo` puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`.

### **hae_kirjan_arvostelu_avaimella_nimi(hakuarvo)**
Hakee kirjan tiedon `arvostelu`, kun kirjan nimi on sama kuin annettu hakuarvo. Jos kirja löytyy, on palautettava kirjan arvostelu, muuten palautetaan `null`.

Parametri `hakuarvo` on kirjan nimi.

Palauttaa hakuarvoa `nimi` vastaavan kirjan arvostelu tiedon. Jos hakuarvolla ei löydy kirja-oliota, palautetaan `null.`

Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`.