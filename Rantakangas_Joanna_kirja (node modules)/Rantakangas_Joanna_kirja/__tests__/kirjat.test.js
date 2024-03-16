'use strict';

const fs = require('fs');
const Kirjarekisteri = require('../kirja');



describe('Kirjarekisteri', () => {
    let kirjarekisteri;

    beforeEach(() => {
        const jsonData = fs.readFileSync('tietovarasto.json', 'utf8');
        kirjarekisteri = new Kirjarekisteri(jsonData);
    });

    describe('on_lisätiedot', () => {
        test('pitäisi palauttaa true, jos kirjalla annetulla kirajaID:llä on lisätiedot', () => {
            const onLisätiedot = kirjarekisteri.on_lisätiedot(1);
            expect(onLisätiedot).toBe(true);
        });

        test('pitäisi palauttaa false, jos kirajalla annetulla kirjaID:llä ei ole yksityiskohtia', () => {
            const onLisätiedot = kirjarekisteri.on_lisätiedot(5);
            expect(onLisätiedot).toBe(false);
        });
    });

    describe('hae_lisätiedot', () => {
        test('pitäisi palauttaa kirjan lisätiedot annetulla kirjaID:llä', () => {
            const lisätiedot = kirjarekisteri.hae_lisätiedot(3);
            expect(lisätiedot).toEqual({ "huomautus": "erikoispainos", "painos": "6. painos", "tyyppi": "lehti" });
        });

        test('pitäisi palauttaa tyhjä taulukko, jos annetulla kirjaID:llä ei ole lisätietoja', () => {
            const lisätiedot = kirjarekisteri.hae_lisätiedot('X');
            expect(lisätiedot).toEqual([]);
        });
    });

    describe('haeHinta', () => {
        test('pitäisi palauttaa kirjan hinta annetulla kirjaID:llä', () => {
            const price = kirjarekisteri.haeHinta(1);
            expect(price).toBe(15);
        });

        test('pitäisi heittää virhe, jos annetulla kirjaID:llä ei löydy tietoja', () => {
            expect(() => {
                kirjarekisteri.haeHinta('x');
            }).toThrow('annetulla avaimella ei löytynyt tietoja');
        });
    });

    describe('hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija', () => {
        test('pitäisi palauttaa kirjojen kokonaishinta, jotka täyttävät hakuehdot', () => {
            const kokonaisHinta = kirjarekisteri.hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija('Aapeli Aakkonen');
            expect(kokonaisHinta).toBe(25);
        });
        test('pitäisi palauttaa 0, jos hakuehtoja vastaavia kirjoja ei löydy', () => {
            expect(() => {
                kirjarekisteri.hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija('Maija Mietteinen');
            }).toThrow('annetulla avaimella ei löytynyt tietoja');
        });

        test('pitäisi palauttaa kirjan hinta, jotka täyttävät hakuehdot, kun saman kirjailijan kirjoja on vain 1', () => {
            const kokonaisHinta = kirjarekisteri.hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija('Leila Hökki');
            expect(kokonaisHinta).toBe(15);
        });

        test('pitäisi heittää virhe, jos parametri puuttuu', () => {
            expect(() => {
                kirjarekisteri.hae_kirjojen_kokonaishinta_hakuehdolla_kirjailija();
            }).toThrow('parametri puuttuu');
        });
    });




    describe('hae_kirjan_arvostelu_avaimella_nimi', () => {
        test('palauttaa kirjan arvostelun, kun kirja löytyy', () => {
            const nimi = kirjarekisteri.hae_kirjan_arvostelu_avaimella_nimi("Numerohirmu");
            expect(nimi).toEqual([

                {
                    kirjaID: 1,
                    nimi: 'Numerohirmu',
                    kirjailija: 'Leila Hökki',
                    hinta: 15,
                    arvostelu: '**',
                    aiheet: ['tietokoneet', 'pelaaminen', 'mysteeri'],
                    lisätiedot: {
                        huomautus: 'keräilijän painos',
                        painos: 'ensimmäinen painos',
                        tyyppi: 'pehmeäkantinen',
                    }
                },

            ]);
        });
        test('palauttaa null, kun kirjaa ei löydy', () => {
            const nimi = kirjarekisteri.hae_kirjan_arvostelu_avaimella_nimi('Väärä kirja');
            expect(nimi).toEqual([]);
        });
        test('pitäisi tulla virhe, jos parametri puuttuu', () => {
            expect(() => {
                kirjarekisteri.hae_kirjan_arvostelu_avaimella_nimi();
            }).toThrow('parametri puuttuu');
        });

    });

});

