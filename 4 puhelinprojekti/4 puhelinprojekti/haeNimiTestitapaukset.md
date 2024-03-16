# Testitapaukset

## **haeNimi(numero)**
palauttaa numeron omistajan etu- ja sukunimen oliossa, joka on muotoa:
```json
{"etunimi":"", "sukunimi":""}
```

Jos numeroa ei löydy, palauttaa `null`
Jos parametri puuttuu, palauttaa myös `null`

## Testit

kaikissa testeissä käytetään oletusdataa.

### 1. hae numeron "87654321" omistaja

```js
muistio.haeNimi("87654321");
```

palauttaa
```json
{"etunimi":"Leila", "sukunimi":"Hökki"}
```

### 1B. hae numeron "987123" omistaja

```js
muistio.haeNimi("987123");
```

palauttaa
```json
{"etunimi":"Matti", "sukunimi":"Puro"}
```

### 2. Jos numeroa ei löydy, palauttaa `null`

```js
muistio.haeNimi("999");
```

palauttaa `null`

### 3. Jos parametri puuttuu, palauttaa `null`

```js
muistio.haeNimi();
```

palauttaa `null`