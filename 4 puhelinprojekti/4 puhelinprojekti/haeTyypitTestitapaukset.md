# Testitapaukset

## **haeTyypit()**

palauttaa kaikki puhelintyypit taulukossa esiintymisjärjestyksessä. Tyyppi lisätään taulukkoon vain kerran. Jos data ei sisällä puhelimia (puhelimet-kenttä puuttuu tai se on tyhjä taulukko) tai henkilöitä, palautetaan tyhjä taulukko [].
Jos puhelimelta tyyppi on tyhjä merkkijono, ei tyyppiä lisätä taulukkoon.

Esimerkiksi:
```json
["koti","työ","mobiili"]
```
## Testit

### 1. Haetaan tyypit oletusdatalla

```js
rekisteri.haeTyypit();
```

palauttaa:
```json
["koti","työ","mobiili"]
```

### 2. käytetään muokattua testidataa

#### testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro"
    }
]
```
```js
rekisteri.haeTyypit();
```
palauttaa tyhjän taulukon [].

### 3. Testidata on tyhjä taulukko

#### Testidata
```json
[]
```

```js
rekisteri.haeTyypit();
```
palauttaa tyhjän taulukon []

### 4. Tyyppi, joka on tyhjä merkkijono, ei tule tulostaulukkoon

#### testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[
            {"tyyppi":"", "numero":"12345678" },
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

```js
rekisteri.haeTyypit();
```

palauttaa:
```json
["työ","mobiili","koti"]
```

#### 5. joltakin henkilöltä puuttuu puhelimet

#### Testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[]
    },
    {
        "etunimi":"Veera",
        "sukunimi":"Puro",
        "puhelimet":[
            {"tyyppi":"työ", "numero":"111112222" }
        ]
    },
    {
        "etunimi":"Pirkko",
        "sukunimi":"Puro"
    },
    {
        "etunimi":"Meri",
        "sukunimi":"Myrskylä",
        "puhelimet":[
            {"tyyppi":"koti", "numero":"333444555" },
            {"tyyppi":"työ", "numero":"876876876" }
        ]
    }
]
```

```js
rekisteri.haeTyypit();
```

palauttaa:
```json
["työ","koti"]
```