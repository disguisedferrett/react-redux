Joanna Rantakangas


# **Tehtävä** (tuote)


## Tehtävä: Luo **tuote** -komponentti
Luo web-komponentti tuotetietojen näyttämistä varten. Käytettävä tietovarasto välitetään oliolle palvelimelta json-muodossa. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Tietoja saa muuttaa, kunhan rakenne säilyy samanlaisena.

Lisää verkkosivuun ostoskori, johon voit lisätä tuotetietoja. Sivulla tulee olla myös yhteenveto ostoskorin sisällöstä. Yhteenveto näyttää ostoskorissa olevat tuotteet ja niiden lukumäärät. Sivulla tulee olla näkyvissä myös korin yhteishinta.

### tietovarasto.json

```json
[
  {
    "tuoteID": 1,
    "merkki": "Future 2025",
    "tyyppi": "jääkaappi",
    "hinta": 36,
    "valmistaja": "Vempain oy",
    "värit": [
      "valkoinen",
      "vihreä",
      "oranssi"
    ],
    "lisätiedot": {
      "kulutus": "A++",
      "kommentti": "vanha malli",
      "malli": "chrome"
    }
  },
  {
    "tuoteID": 2,
    "merkki": "MaxEffect 2000",
    "tyyppi": "imuri",
    "hinta": 200,
    "valmistaja": "Koje oy",
    "värit": [
      "vihreä",
      "musta",
      "sininen"
    ],
    "lisätiedot": {
      "kulutus": "E",
      "kommentti": "ei kommentteja",
      "malli": "GT"
    }
  },
  {
    "tuoteID": 3,
    "merkki": "E-lux S34",
    "tyyppi": "silitysrauta",
    "hinta": 36,
    "valmistaja": "Vempain oy",
    "värit": [
      "musta",
      "oranssi",
      "valkoinen"
    ],
    "lisätiedot": {
      "kulutus": "B",
      "kommentti": "-",
      "malli": "XL"
    }
  },
  {
    "tuoteID": 4,
    "merkki": "Luuri S43",
    "tyyppi": "silitysrauta",
    "hinta": 300,
    "valmistaja": "Leila Hökki oy",
    "värit": [
      "vihreä",
      "musta",
      "punainen"
    ],
    "lisätiedot": {
      "kulutus": "D",
      "kommentti": "vanha malli",
      "malli": "chrome"
    }
  },
  {
    "tuoteID": 5,
    "merkki": "Future 2025",
    "tyyppi": "jääkaappi",
    "hinta": 36,
    "valmistaja": "Ralen rele",
    "värit": [
      "punainen",
      "keltainen",
      "oranssi"
    ]
  }
]
```

# Projekti

## Attribuuttirajapinta
Luo komponentille attribuuttirajapinta, joka reagoi attribuuttien arvojen vaihtumiseen. Valitse seurattaviksi attribuuteiksi mielestäsi olennaiset.

## Javascript rajapinta
Luo komponentille rajapinta javascriptiä varten. Synkronoi se attribuuttirajapinnan kanssa.
- getterit
- setterit
- muut tarvittavat metodit tai luokkafunktiot

## Luo kansio projektille
- nimeä kansio nimellä `Rantakangas_Joanna_tuote`
- luo luokka tuote tiedostoon tuotekomponentti.js
- anna elementille nimeksi <tuote-elementti>
- lisää kansioon pääohjelma
- lisää kansioon tuote.html tiedosto, jotta komponenttia voi testata
- lisää datapalvelimen tietovarastoksi **tietovarasto.json** 


## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. 
