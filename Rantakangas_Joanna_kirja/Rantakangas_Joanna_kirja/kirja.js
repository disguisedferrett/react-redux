module.exports = class Kirjarekisteri {
  constructor(jsondata) {
    if (!jsondata) {
      throw new Error('tiedot puuttuvat');
    }
    this.data = JSON.parse(jsondata);
  }

  on_lisätiedot(kirjaID) {
    const kirja = this.data.find((item) => item.kirjaID === kirjaID);
    if (kirja && kirja.lisätiedot && Object.keys(kirja.lisätiedot).length !== 0) {
      return true;
    }
    return false;
  }

  hae_lisätiedot(kirjaID) {
    const kirja = this.data.find((item) => item.kirjaID === kirjaID);
    if (kirja && kirja.lisätiedot) {
      return kirja.lisätiedot;
    }
    return [];
  }

  haeHinta(kirjaID) {
    const kirja = this.data.find((item) => item.kirjaID === kirjaID);
    if (kirja && kirja.hinta) {
      return kirja.hinta;
    }
    throw new Error('annetulla avaimella ei löytynyt tietoja');
  }

  hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija(kirjailija) {
    if (!kirjailija) {
      throw new Error('parametri puuttuu');
    }
    const kirjat = this.data.filter((item) => item.kirjailija === kirjailija);
    if (kirjat.length === 0) {
      throw new Error('annetulla avaimella ei löytynyt tietoja');
    }
    const kokohaisHinta = kirjat.reduce((sum, kirja) => sum + (kirja.hinta || 0), 0);
    console.log(kokohaisHinta);
    return kokohaisHinta;
  }

  hae_kirjan_arvostelu_avaimella_nimi(nimi) {
    if (!nimi) {
      throw new Error('parametri puuttuu');
    }
    return this.data.filter((item) => item.nimi === nimi);
  }

};




