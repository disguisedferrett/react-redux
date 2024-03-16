# Testitapaukset

## **haeHenkilonNumerotTyypilla(etunimi, sukunimi, tyyppi)**

palauttaa taulukon, jossa on annetun henkilön annetun tyyppiset numerot.

jos annetulla nimellä ei löydy henkilöä, palauttaa []
jos annetulla tyypillä ei löydy numeroa, palauttaa []
jos yksikin parametri puuttuu, aiheuttaa poikkeuksen `'Parametri puuttuu'`

Esimerkiksi Leila Hökin työnumerot:
```js
muistio.haeHenkilonNumerotTyypilla('Leila','Hökki','työ');
```
palauttaa

```json
["87654321","050403020"]
```
## Testit

Ennen kaikkia testejä luodaan muistio oletusdatalla.

### 1. haetaan Leila Hökin työnumerot
```js
muistio.haeHenkilonNumerotTyypilla('Leila','Hökki','työ');
```
palauttaa

```json
["87654321","050403020"]
```

### 2.haetaan Matti Puron mobiilinumero
```js
muistio.haeHenkilonNumerotTyypilla('Matti','Puro','mobiili');
```
palauttaa

```json
["05012345"]
```
### 3. haetaan Leila Hökin kotinumerot
```js
muistio.haeHenkilonNumerotTyypilla('Leila','Hökki','koti');
```
palauttaa

```json
["12345678"]
```

### 4. Väärä tyyppi tai nimi palauttaa tyhjän taulukon

```js
muistio.haeHenkilonNumerotTyypilla('Matti','Puro','x');
muistio.haeHenkilonNumerotTyypilla('Matti','x','mobiili');
muistio.haeHenkilonNumerotTyypilla('x','Puro','mobiili');
```
palauttaa []

### 5. Parametri puuttuu
```js
muistio.haeHenkilonNumerotTyypilla('Matti','Puro');
muistio.haeHenkilonNumerotTyypilla('Matti');
muistio.haeHenkilonNumerotTyypilla();
```
aiheuttaa poikkeuksen: `'Parametri puuttuu'`
