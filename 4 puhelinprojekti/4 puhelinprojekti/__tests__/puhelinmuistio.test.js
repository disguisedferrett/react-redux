'use strict';

const puhelimet=require('../puhelimet.json');
const Puhelinmuistio = require('../puhelinmuistio');

describe('Testataan konstruktori', ()=>{
    test('1. Testataan puuttuvalla parametrilla', ()=>{
        expect(() => new Puhelinmuistio()).toThrow('Parametri puuttuu');
    });

    //Tätä ei pidä normaalisti tehdä!
    // test('Sisäisen toteutuksen avulla', ()=>{
    //     const muistio=new Puhelinmuistio(puhelimet);
    //     expect(muistio.puhelindata).toEqual(puhelimet);
    // })
});

describe('Testataan metodi haeTyypit',()=>{
    test('1. Haetaan tyypit oletusdatalla',()=>{
        const muistio=new Puhelinmuistio(puhelimet);
        expect(muistio.haeTyypit()).toEqual(["koti", "työ", "mobiili"]);
    });

    test('2. käytetään muokattua testidataa',()=>{
        const testidata = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": []
            },
            {
                "etunimi": "Matti",
                "sukunimi": "Puro"
            }
        ];
        const muistio=new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual([]);
    });

    test('3. Testidata on tyhjä taulukko',()=>{
        const muistio = new Puhelinmuistio([]);
        expect(muistio.haeTyypit()).toEqual([]);
    });

    test('4. Tyyppi, joka on tyhjä merkkijono, ei tule tulostaulukkoon',()=>{
        const testidata = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": [
                    { "tyyppi": "", "numero": "12345678" },
                    { "tyyppi": "työ", "numero": "87654321" },
                    { "tyyppi": "työ", "numero": "050403020" }
                ]
            },
            {
                "etunimi": "Matti",
                "sukunimi": "Puro",
                "puhelimet": [
                    { "tyyppi": "työ", "numero": "56789012" },
                    { "tyyppi": "mobiili", "numero": "05012345" },
                    { "tyyppi": "koti", "numero": "987123" }
                ]
            }
        ];
        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual(["työ", "mobiili", "koti"]);
    });

    test('5. joltakin henkilöltä puuttuu puhelimet',()=>{
        const testidata = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": []
            },
            {
                "etunimi": "Veera",
                "sukunimi": "Puro",
                "puhelimet": [
                    { "tyyppi": "työ", "numero": "111112222" }
                ]
            },
            {
                "etunimi": "Pirkko",
                "sukunimi": "Puro"
            },
            {
                "etunimi": "Meri",
                "sukunimi": "Myrskylä",
                "puhelimet": [
                    { "tyyppi": "koti", "numero": "333444555" },
                    { "tyyppi": "työ", "numero": "876876876" }
                ]
            }
        ];
        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual(["työ", "koti"]);
    });



});

describe('Testataan metodi haeHenkilonNumerotTyypilla yksittäin',()=>{
    const muistio = new Puhelinmuistio(puhelimet);

    test('1. haetaan Leila Hökin työnumerot',()=>{
        expect(muistio.haeHenkilonNumerotTyypilla('Leila', 'Hökki', 'työ'))
            .toEqual(["87654321", "050403020"]);
    });
    test('2.haetaan Matti Puron mobiilinumero',()=>{
        expect(muistio.haeHenkilonNumerotTyypilla('Matti', 'Puro', 'mobiili'))
            .toEqual(["05012345"]);
    });

    test('3. haetaan Leila Hökin kotinumerot',()=>{
        expect(muistio.haeHenkilonNumerotTyypilla('Leila', 'Hökki', 'koti'))
            .toEqual(["12345678"]);
    });

    describe('4. Väärä tyyppi tai nimi palauttaa tyhjän taulukon',()=>{
        test('testataan arvoilla etunimi=Matti,sukunimi=Puro,tyyppi=x',()=>{
            expect(muistio.haeHenkilonNumerotTyypilla('Matti', 'Puro', 'x'))
                .toEqual([]);
        });
        test('testataan arvoilla etunimi=Matti,sukunimi=x,tyyppi=mobiili', () => {
            expect(muistio.haeHenkilonNumerotTyypilla('Matti', 'x', 'mobiili'))
                .toEqual([]);
        });
        test('testataan arvoilla etunimi=x,sukunimi=Puro,tyyppi=mobiili', () => {
            expect(muistio.haeHenkilonNumerotTyypilla('x', 'Puro', 'mobiili'))
                .toEqual([]);
        });
    });

    describe('5. Parametri puuttuu',()=>{
        test('yksi parametri puuttuu',()=>{
            expect(() => muistio.haeHenkilonNumerotTyypilla('Matti', 'Puro'))
                .toThrow('Parametri puuttuu');
        });
        test('kaksi parametria puuttuu', () => {
            expect(() => muistio.haeHenkilonNumerotTyypilla('Matti'))
                .toThrow('Parametri puuttuu');
        });
        test('kaikki parametrit puuttuvat', () => {
            expect(() => muistio.haeHenkilonNumerotTyypilla())
                .toThrow('Parametri puuttuu');
        });
    });
});


describe('Testataan metodi haeHenkilonNumerotTyypilla testEach', () => {
    const muistio = new Puhelinmuistio(puhelimet);

    const testidata1_3=[
        //etunimi,sukunimi,tyyppi,      odotetttu
        ['Leila', 'Hökki', 'työ', ["87654321", "050403020"]],
        ['Matti', 'Puro', 'mobiili', ["05012345"]],
        ['Leila', 'Hökki', 'koti', ["12345678"]]
    ];

    test.each(testidata1_3)('Testit 1-3: etunimi=%s,sukunimi=%s, tyyppi=%s',
        (etunimi,sukunimi,tyyppi,odotettu)=>{
            expect(muistio.haeHenkilonNumerotTyypilla(etunimi,sukunimi,tyyppi))
                .toEqual(odotettu);
    });

    const testidata_4=[
        //  e       s      t
        ['Matti', 'Puro', 'x'],
        ['Matti', 'x', 'mobiili'],
        ['x', 'Puro', 'mobiili']
    ];
    test.each(testidata_4)('enimi=%s, snimi=%s, tyyppi=%s',(e,s,t)=>{
        expect(muistio.haeHenkilonNumerotTyypilla(e,s,t)).toEqual([]);
    });

});

describe('testataan metodi haeKaikkiNumerotTyypilla',()=>{
    const muistio = new Puhelinmuistio(puhelimet);

    const odotettuTyo = [
        { "etunimi": "Leila", "sukunimi": "Hökki", "numero": { "tyyppi": "työ", "puh": "87654321" } },
        { "etunimi": "Leila", "sukunimi": "Hökki", "numero": { "tyyppi": "työ", "puh": "050403020" } },
        { "etunimi": "Matti", "sukunimi": "Puro", "numero": { "tyyppi": "työ", "puh": "56789012" } }
    ];

    const odotettuKoti = [
        { "etunimi": "Leila", "sukunimi": "Hökki", "numero": { "tyyppi": "koti", "puh": "12345678"} },
        { "etunimi": "Matti", "sukunimi": "Puro", "numero": { "tyyppi": "koti", "puh": "987123" } }
    ];

    const odotettuMobiili = [
        { "etunimi": "Matti", "sukunimi": "Puro", "numero": { "tyyppi": "mobiili", "puh": "05012345" }}
    ];

    test('1. Haetaan työnumero',()=>{
        expect(muistio.haeKaikkiNumerotTyypilla('työ')).toEqual(odotettuTyo);
    });

    test('2. Haetaan kotinumero',()=>{
        expect(muistio.haeKaikkiNumerotTyypilla('koti')).toEqual(odotettuKoti);
    });

    test('3. Haetaan mobiilinumero',()=>{
        expect(muistio.haeKaikkiNumerotTyypilla('mobiili')).toEqual(odotettuMobiili);
    });

    test('4. Haetaan olemattomalla tyypillä', () => {
        expect(muistio.haeKaikkiNumerotTyypilla('x')).toEqual([]);
    });

    test('5. parametri puuttuu aiheuttaa poikkeuksen',()=>{
        expect(() => muistio.haeKaikkiNumerotTyypilla()).toThrow('Parametri puuttuu');
    });

    const testiArvot=[
        ['työ', odotettuTyo],
        ['koti', odotettuKoti],
        ['mobiili', odotettuMobiili],
        ['x',[]]
    ];

    test.each(testiArvot)('tyyppi=%s', (tyyppi,odotettu)=>{
        expect(muistio.haeKaikkiNumerotTyypilla(tyyppi)).toEqual(odotettu);
    });

});

describe('testataan metodi haeNimi',()=>{
    const muistio = new Puhelinmuistio(puhelimet);

    test('1. hae numeron "87654321" omistaja', ()=>{
        expect(muistio.haeNimi("87654321"))
            .toEqual({ "etunimi": "Leila", "sukunimi": "Hökki" });
    });

    test('1B. hae numeron "987123" omistaja',()=>{
        expect(muistio.haeNimi("987123"))
            .toEqual({ "etunimi": "Matti", "sukunimi": "Puro" });
    });

    test('2. Jos numeroa ei löydy, palauttaa `null`', ()=>{
        expect(muistio.haeNimi('999')).toBeNull();
    });

    test('3. Jos parametri puuttuu, palauttaa `null`', ()=>{
        expect(muistio.haeNimi()).toBeNull();
    });
});

describe('Testataan metodi haeKaikkiNumerot', ()=>{
    test('1. haetaan kaikki numerot oletusdataa käyttäen',()=>{
        const muistio=new Puhelinmuistio(puhelimet);
        expect(muistio.haeKaikkiNumerot()).toEqual(puhelimet);
    });

    test('2. puhelimia puuttuu', ()=>{
        const testidata = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": [
                    { "tyyppi": "koti", "numero": "12345678" },
                    { "tyyppi": "työ", "numero": "87654321" },
                    { "tyyppi": "työ", "numero": "050403020" }
                ]
            },
            {
                "etunimi": "Matti",
                "sukunimi": "Puro",
                "puhelimet": []
            },
            {
                "etunimi": "Veera",
                "sukunimi": "Virta"
            }
        ];

        const odotettu = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": [
                    { "tyyppi": "koti", "numero": "12345678" },
                    { "tyyppi": "työ", "numero": "87654321" },
                    { "tyyppi": "työ", "numero": "050403020" }
                ]
            }
        ];
        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeKaikkiNumerot()).toEqual(odotettu);
    });

    test('3. Kaikki puhelimet puuttuvat',()=>{
        const testidata = [
            {
                "etunimi": "Leila",
                "sukunimi": "Hökki",
                "puhelimet": []
            },
            {
                "etunimi": "Matti",
                "sukunimi": "Puro",
                "puhelimet": []
            },
            {
                "etunimi": "Veera",
                "sukunimi": "Virta"
            }
        ];

        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeKaikkiNumerot()).toEqual([]);
    });

    test('4. Kaikki henkilöt puuttuvat',()=>{
        const muistio = new Puhelinmuistio([]);
        expect(muistio.haeKaikkiNumerot()).toEqual([]);
    });
})