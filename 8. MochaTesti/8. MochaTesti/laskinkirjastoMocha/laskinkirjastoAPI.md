# Laskinkirjasto API

## **summa(a,b)**

Funktio palauttaa kahden parametrina annettujen lukujen summan.

Parametrit: a ja b ovat numeroita
Palauttaa: a:n ja b:n summan

-   jos parametri puuttuu, aiheuttaa poikkeuksen: `'parametri puuttuu'`
-   jos kummatkin parametrit on annettu, mutta parametri ei ole numero, 
    aiheutuu poikkeus: `'vain numerot sallittuja'`

## Testitapaukset

#### 1. testataan kokonaisluvuilla

-   summa(1,1) palauttaa 2
-   summa(2,3) palauttaa 5
-   summa(12,100) palauttaa 112

[2, -4, -2],
[-4, 6, 2],
[-3, -5, -8],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[0, -3, -3],
[-3, 0, -3],
[5, -5, 0]

#### 2. testataan desimaaliluvuilla
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[2.5, -3, -0.5],
[-2.5, -2.5, -5.0],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### 3. Parametri puuttuu
- summa() aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa(1) aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa('a') aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa('') aiheuttaa poikkeuksen `'parametri puuttuu'`

#### 4. Parametri ei numeerinen

- summa('1','2') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('a',1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1,'a') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('a','b') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('','') aiheuttaa poikkeuksen `'vain numero sallittuja'`

- summa(null,1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1,null) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(undefined,1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1,undefined) aiheuttaa poikkeuksen `'vain numero sallittuja'`


## **erotus(a,b)**

Funktio palauttaa erotuksen a-b. 

parametrit: a ja b numeroita
palauttaa erotuksen a-b


-   jos parametri puuttuu, aiheuttaa poikkeuksen: `'parametri puuttuu'`
-   jos kummatkin parametrit on annettu, mutta parametri ei ole numero, 
    aiheutuu poikkeus: `'vain numerot sallittuja'`


## Testitapaukset (erotus)

#### 1. testataan erotus kokonaisluvuilla

[1, 1, 0],
[2, 3, -1],
[100, 12, 88]
[2, -4, 6],
[-4, 6, -10],
[-3, -5, 2],
[0, 0, 0],
[0, 3, -3],
[3, 0, 3],
[0, -3, 3],
[-3, 0, -3],
[5, 5, 0]

#### 2. testataan erotus desimaaliluvuilla
[10, 11.5, -1.5],
[2.5, 3, -0.5],
[-2.5, 3, -5.5],
[2.5, -3, 5.5],
[-2.5, -2.5, 0],
[2.5, -2.5, 5],
[2.4, -2.5, 4.9]

#### 3. Parametri puuttuu erotus

erotus() aiheuttaa poikkeuksen `'parametri puuttuu'`

ja 

['erotus(1)', 1],
['erotus("a")', 'a'],
['erotus("")', '']

#### 4. Parametri ei numeerinen erotus

['erotus("1","2")','1', '2'],
['erotus("a",1)', 'a', 1],
['erotus(1,"a")', 1, 'a'],
['erotus("a","b")', 'a', 'b'],
['erotus("","")', '', ''],
['erotus(null,1)', null, 1],
['erotus(1,null)', 1, null],
['erotus(undefined, 1)', undefined, 1],
['erotus(1, undefined)', 1, undefined]