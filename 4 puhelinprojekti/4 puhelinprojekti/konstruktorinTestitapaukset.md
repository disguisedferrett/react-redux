# testitapaukset 

## **konstruktori(data)**

Puhelinmuistio data annetaan parametrina konstruktorissa. Jos parametri puuttuu, aiheutuu poikkeus `'Parametri puuttuu'`.

## Testit

### 1. Testataan puuttuvalla parametrilla

```js
new Puhelinmuistio();
```

aiheuttaa poikkeuksen: `'Parametri puuttuu'`

### Huom. 

Periaatteessa olisi mahdollista testata myös onko parametrina annettu data sijoitettu olion kenttään, mutta tämä vaatisi tietoa olion sisäisestä toteutuksesta. Testauksessa ei pitäisi olettaa mitään toteutuksesta vaan testitapaukset perustuvat rajapintaan (API). Tämä testatus tapahtuu muiden testien sivutuotteena.


