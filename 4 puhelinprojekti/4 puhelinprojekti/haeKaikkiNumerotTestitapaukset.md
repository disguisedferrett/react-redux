# Testitapaukset

## **haeKaikkiNumerot()**

Palauttaa kaikki puhelinnumerot taulukossa, jossa jokaisen henkilön numerot ovat muodossa

```json
{ "etunimi":"", "sukunimi":"", "puhelimet":[] }
```
missä puhelin on muotoa:
```json
{"tyyppi":"", "numero":""}
```

Jos Henkilöllä ei ole puhelinta (puhelimet-kenttä puuttuu tai se on tyhjä taulukko), ei henkilöä lisätä palautettavaan taulukkoon.

Jos kaikki puhelimet puuttuvat, palautetaan tyhjä taulukko
Jos kaikki henkilöt puuttuvat, palautetaan tyhjä taulukko

## Testit

### 1. haetaan kaikki numerot oletusdataa käyttäen

palauttaa oletusdatataulukon

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[
            {"tyyppi":"koti", "numero":"12345678" },
            {"tyyppi":"työ", "numero":"87654321" },
            {"tyyppi":"työ", "numero":"050403020" }
        ]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
        "puhelimet":[
            {"tyyppi":"työ", "numero":"56789012" },
            {"tyyppi":"mobiili", "numero":"05012345" },
            {"tyyppi":"koti", "numero":"987123" }
        ]
    }
]
```

### 2. puhelimia puuttuu

testidata:
```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[
            {"tyyppi":"koti", "numero":"12345678" },
            {"tyyppi":"työ", "numero":"87654321" },
            {"tyyppi":"työ", "numero":"050403020" }
        ]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
        "puhelimet":[]
    },
    {
        "etunimi":"Veera",
        "sukunimi":"Virta"
    }
]
```
palauttaa:
```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[
            {"tyyppi":"koti", "numero":"12345678" },
            {"tyyppi":"työ", "numero":"87654321" },
            {"tyyppi":"työ", "numero":"050403020" }
        ]
    }
]
```

### 3. Kaikki puhelimet puuttuvat
testidata:
```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
        "puhelimet":[]
    },
    {
        "etunimi":"Veera",
        "sukunimi":"Virta"
    }
]
```

palauttaa tyjän taulukon []

### 4. Kaikki henkilöt puuttuvat
testidata on []
palauttaa []