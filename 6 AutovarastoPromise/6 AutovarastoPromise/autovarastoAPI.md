# Autovarasto API

## autot.json
```json
[
    {"malli":"Hoppa", "rekisteri":"ABC-1"},
    {"malli":"Kaara", "rekisteri":"XYZ-12"},
    {"malli":"Hoppa", "rekisteri":"GTF-1"},
    {"malli":"Bil", "rekisteri":"ÅL-23"}
]
```

**hae(avain,arvo)**
funktio palauttaa hakuehdon täyttävät auto-oliot taulukkona. Jos hakuehdot täyttäviä autoja ei löydy, palauttaa tyhjän taulukon.

Jos parametrit (tai parametri) puuttuvat tai avain ei ole `malli` tai `rekisteri`, palautetaan 'parametri puuttuu'

parametrit:
-   avain on joko `malli` tai `rekisteri`
-   arvo on haettava arvo esim. ``Hoppa` tai `ABC-1`

## Esimerkkejä

### Esimerkki 1:
```js
hae('malli','Kaara')
```

palauttaa
```json
[{"malli":"Kaara", "rekisteri":"XYZ-12"}]
```

### Esimerkki 2:

```js
hae('malli','Hoppa')
```
palauttaa
```json
[
    {"malli":"Hoppa", "rekisteri":"ABC-1"},
    {"malli":"Hoppa", "rekisteri":"GTF-1"}
]
```

### Esimerkki 3:
```js
hae('rekisteri','ABC-1')
```
palauttaa
```json
[
    {"malli":"Hoppa", "rekisteri":"ABC-1"}
]
```

### Esimerkki 4:
```js
hae('malli','x')
```
palauttaa []

### Esimerkki 5:
```js
hae()

tai

hae('malli')

tai

hae('x','ABC-1')
```
palauttaa 'parametri puuttuu'


