Joanna Rantakangas


# **Lopputehtävä** (kirja)



## Tehtävä: Luo ja testaa **Kirjarekisteri** -luokka
Luo luokka `Kirjarekisteri`. Luokassa on metodit kirjatietojen käyttöön. Käytettävä tietovarasto välitetään oliolle konstruktorin parametrina. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Täydennä taulukkoa tarvittaessa tai tee testausta varten tarvittavat vaihtoehtoiset versiot. 

### tietovarasto.json

```json
[
  {
    "kirjaID": 1,
    "nimi": "Numerohirmu",
    "kirjailija": "Leila Hökki",
    "hinta": 15,
    "arvostelu": "**",
    "aiheet": [
      "tietokoneet",
      "pelaaminen",
      "mysteeri"
    ],
    "lisätiedot": {
      "huomautus": "keräilijän painos",
      "painos": "ensimmäinen painos",
      "tyyppi": "pehmeäkantinen"
    }
  },
  {
    "kirjaID": 2,
    "nimi": "Pulpettien kapina",
    "kirjailija": "Aapeli Aakkonen",
    "hinta": 25,
    "arvostelu": "***",
    "aiheet": [
      "keksinnöt",
      "tietokannat",
      "testaus"
    ],
    "lisätiedot": {
      "huomautus": "-",
      "painos": "6. painos",
      "tyyppi": "e-kirja"
    }
  },
  {
    "kirjaID": 3,
    "nimi": "Tietokantojen nousu ja tuho",
    "kirjailija": "Jesse Joki",
    "hinta": 25,
    "arvostelu": "**",
    "aiheet": [
      "historia",
      "mysteeri",
      "tietokoneet"
    ],
    "lisätiedot": {
      "huomautus": "erikoispainos",
      "painos": "6. painos",
      "tyyppi": "lehti"
    }
  },
  {
    "kirjaID": 4,
    "nimi": "Pulpettien kapina",
    "kirjailija": "Jesse Joki",
    "hinta": 200,
    "arvostelu": "**",
    "aiheet": [
      "tietokoneet",
      "tietokannat",
      "mysteeri"
    ],
    "lisätiedot": {
      "huomautus": "ensipainos",
      "painos": "7. painos",
      "tyyppi": "pehmeäkantinen"
    }
  },
  {
    "kirjaID": 5,
    "nimi": "Tietokantojen nousu ja tuho",
    "kirjailija": "Jesse Joki",
    "hinta": 123,
    "arvostelu": "*****",
    "aiheet": [
      "tietokoneet",
      "mysteeri",
      "oppikirja"
    ]
  }
]
```


# Kirjarekisteri - rajapinta (API)

## konstruktori

### **constructor(jsondata)**
Alustaa Kirjarekisteri -olion

>Parametrit:
>>Parametri `jsondata` on oliolle välitettävä json-taulukko.

>Paluuarvo:
>>

>Poikkeukset:
>>Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

## Metodit

### **on_lisätiedot(hakuavain)**
Metodi tarkastaa löytyykö annetun hakuavaimen omaavalta kirja-oliolta lisätiedot-olio

>Parametrit:
>>hakuavain on haettavan kirjan perusavain kirjaID

>Paluuarvo:
>>palauttaa true, jos lisätiedot löytyi ja se ei ole tyhjä olio, muuten palautetaan false. Jos parametri hakuavain puuttuu palautetaan myös false.

>Poikkeukset:
>>

### **hae_lisätiedot(hakuavain)**
palauttaa annetulla hakuavaimella olevan kirjan lisätiedot -olion

>Parametrit:
>>hakuavain on haettavan kirjan perusavain kirjaID

>Paluuarvo:
>>palauttaa lisätiedot -olion tai null, jos hakuavaimella ei löydy kirja -oliota tai jos hakuavain puuttuu

>Poikkeukset:
>>

### **haeHinta(kirjaID)**
hakee kirjan hinnan annetulla perusavaimella kirjaID

>Parametrit:
>>kirjan perusavain kirjaID

>Paluuarvo:
>>palauttaa löydetyn kirjan hinnan

>Poikkeukset:
>>Jos avaimella ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`

### **hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija(hakuarvo)**
Hakee kaikkien niiden kirjojen yhteishinnan, joilla on sama kirjailija

>Parametrit:
>>kirjailija, jonka perusteella kirjojen hinnat lasketaan yhteen

>Paluuarvo:
>>kirjojen yhteenlaskettu kokonaishinta

>Poikkeukset:
>>Jos hakuarvolla ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`. Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_kirjan_arvostelu_avaimella_nimi(hakuarvo)**
hakee kirjan tiedon arvostelu, kun kirjan nimi on sama kuin annettu hakuarvo. Jos kirja löytyy, on palautettava arvo kirjan arvostelu, muuten palautetaan null

>Parametrit:
>>hakuarvo on kirjan nimi

>Paluuarvo:
>>palauttaa hakuarvoa nimi vastaavan kirjan arvostelu tiedon. Jos hakuarvolla ei löydy kirja-oliota, palautetaan null

>Poikkeukset:
>>Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

# Projekti

## Luo kansio testiprojektille
- nimeä kansio nimellä `Rantakangas_Joanna_kirja`
- luo **package.json**
  - **`npm init -y`**
- asenna **jest** kehitysriippuvuudeksi
  - **`npm install jest --save-dev`**
- tee testikansio `__tests__` testeille
- muokkaa **package.json** lisäämällä `jest` `test`-scriptiin
- käytä tiedonlähteenä tiedostoa **tietovarasto.json** 

## Tee rajapintakuvauksen mukaiset testitapaukset projektikansioon Markdown-tiedostoon

Aloita tekemällä testitapaukset. Tee testitapaukset edellä olevien rajapintakuvausten mukaan. Käytä myös "mielikuvitusta" erilaisten tilanteiden löytämiseksi testitapaukset ovat sinun tulkintasi rajapinnasta.Tässä ei ole oikeita tai vääriä vastauksia. 

## Tee testit ja tarkasta, että ne eivät mene läpi
## Toteuta metodit
## Testaa toteutusta ajamalla testit kunnes ne menee läpi

## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. Poista `node_modules` kansio ennen lähettämistä. Palauta projektikansiossa myös `package.json`. tiedosto.
