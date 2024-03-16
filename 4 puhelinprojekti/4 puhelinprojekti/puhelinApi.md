# Puhelin API

## data

Puhelin data on json taulukossa. Puhelinnumero voi olla rekisterissä vain kerran ja sen voi omistaa vain yksi henkilö. Sama henkilö voi olla vain kerran rekisterissä.

### puhelimet.json
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

## Puhelinmuistio -luokka

### **konstruktori(data)**

Puhelinmuistio data annetaan parametrina konstruktorissa. Jos parametri puuttuu, aiheutuu poikkeus `'Parametri puuttuu'`.

## Metodit

### **haeTyypit**

Palauttaa kaikki puhelintyypit taulukossa esiintymisjärjestyksessä. Tyyppi lisätään taulukkoon vain kerran. Jos data ei sisällä puhelimia  (puhelimet-kenttä puuttuu tai se on tyhjä taulukko) tai henkilöitä, palautetaan tyhjä taulukko [].
Jos puhelimelta tyyppi on tyhjä merkkijono, ei tyyppiä lisätä taulukkoon.

Esimerkiksi:
```json
["koti","työ","mobiili"]
```

### **haeHenkilonNumerotTyypilla(etunimi, sukunimi, tyyppi)**

palauttaa taulukon, jossa on annetun henkilön annetun tyyppiset numerot.

jos annetulla nimellä ei löydy henkilöä, palauttaa []
jos annetulla tyypillä ei löydy numero, palauttaa []
jos yksikin parametri puuttuu, aiheuttaa poikkeuksen `'Parametri puuttuu'`

Esimerkiksi Leila Hökin työnumerot:
```js
muistio.haeHenkilonNumerotTyypilla('Leila','Hökki','työ');
```
palauttaa

```json
["87654321","050403020"]
```

### **haeKaikkiNumerotTyypilla(tyyppi)**

palauttaa taulukon olioita. Oliossa on nimitiedot ja puhelinumero muodossa:

```json
[
    {"etunimi":"","sukunimi":"","numero":{"tyyppi":"","puh":""}},
    {"etunimi":"","sukunimi":"","numero":{"tyyppi":"","puh":""}}
]
```

Jos henkilöllä on samantyyppisiä numeroita useampia, tulee taulukkoon kustakin oma olio.

Jos annetun tyyppisiä numeroita ei löydy, palauttaa tyhjän taulukon.

Jos parametri puuttuu, aiheutuu poikkeus `'Parametri puuttuu'`.

Esimerkiksi kaikki työnumerot:

```json
[
    {"etunimi":"Leila","sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"87654321"}},
    {"etunimi":"Leila","sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"050403020"}}
    {"etunimi":"Matti","sukunimi":"Puro","numero":{"tyyppi":"työ","puh":"56789012"}}
]
```

### **haeNimi(numero)**
palauttaa numeron omistajan etu- ja sukunimen oliossa, joka on muotoa:
```json
{"etunimi":"", "sukunimi":""}
```

Jos numeroa ei löydy, palauttaa `null`
Jos parametri puuttuu, palauttaa myös `null`

### **haeKaikkiNumerot()**

Palauttaa kaikki puhelinnumerot taulukossa, jossa jokaisen henkilön numerot ovat muodossa

```json
{ "etunimi":"", "sukunimi":"", "puhelimet":[] }
```
missä puhelin on muotoa:
```json
{"tyyppi":"", "numero":""}
```

Jos Henkilöllä ei ole puhelinta (puhelimet-kenttä puuttuu tai se on tyhjä taulukko), ei henkilä lisätä palautettavaan taulukkoon.

Jos kaikki puhelimet puuttuvat, palautetaan tyhjä taulukko
Jos kaikki henkilöt puuttuvat, palautetaan tyhjä taulukko