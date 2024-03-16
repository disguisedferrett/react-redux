'use strict'

const expect = require('chai').expect;
const {summa, erotus} = require('../laskinkirjastoMocha/laskinkirjasto');
const laskin = require('../laskinkirjastoMocha/laskinkirjasto');

describe('Testataan että funktio on määritelty', function(){
    it('laskin.summa on funktio', function(){
        expect(laskin.summa).to.be.a('function');

    });
    it('summa on funktio', function(){
        expect(summa).to.be.a('function');
    });
});

describe('Testataan summaa yksittäin', function(){
    it('summa(1,1)=2', function(){
        expect(summa(1,1)).to.equal(2);

    });

    it('laskin.summa(1,1)=2', function(){
        expect(laskin.summa(1,1)).to.equal(2);
    });

    it('summa(2,3)=5', function(){
        expect(laskin.summa(2,3)).to.equal(5);
    });
    it('summa(12,100)=112', function(){
        expect(laskin.summa(12,100)).to.equal(112);
    });
});

describe('testataan taulukossa olevilla testitapauksilla', function(){
    const testiArvot=[
        {a:2, b:-4, odotettu:-2},
        {a:-4, b:6, odotettu:2},
        {a:-3, b:-5, odotettu:-8},
        {a:0, b:0, odotettu:0},
        {a:0, b:3, odotettu:3}
    ];
    testiArvot.forEach(function(arvo){
        it(`summa(${arvo.a}, ${arvo.b})= ${arvo.odotettu}`, function(){
            expect(summa(arvo.a, arvo.b)).to.equal(arvo.odotettu);
        });
    });
});

describe('testataan taulukossa olevilla testitapauksilla V2', function(){
    const testiArvot=[
        {a:2, b:-4, odotettu:-2},
        {a:-4, b:6, odotettu:2},
        {a:-3, b:-5, odotettu:-8},
        {a:0, b:0, odotettu:0},
        {a:0, b:3, odotettu:3}
    ];
    for(const arvo of testiArvot){
        it(`summa(${arvo.a}, ${arvo.b})= ${arvo.odotettu}`, function(){
            expect(summa(arvo.a, arvo.b)).to.equal(arvo.odotettu);
        });
    }
       
});

describe('testataan taulukossa olevilla jestmäisesti', function(){
    const testiArvot=[
        [2, -4, -2],
        [-4, 6, 2],
        [-3, -5,-8],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [0, -3,-3],
        [-3, 0,-3],
        [5, -5, 0]
    ];
    testiArvot.forEach(function(arvo){
        it(`summa(${arvo[0]}, ${arvo[1]})= ${arvo[2]}`, function(){
            expect(summa(arvo[0], arvo[1])).to.equal(arvo[2]);
        });
    });
       
});

describe('testataan summa desimaaleilla', function(){ //tehtävä 2
    const testiArvot=[
        {a:10, b:11.5, odotettu:21.5},
        {a:2.5, b:3, odotettu:5.5},
        {a:-2.5, b:3, odotettu:0.5},
        {a:2.5, b:-3, odotettu:-0.5},
        {a:-2.5, b:-2.5, odotettu:-5.0},
        {a:2.5, b:-2.5, odotettu:0},
        {a:2.4, b:-2.5, odotettu:-0.1}
    ];
    testiArvot.forEach(function(arvo){
        it(`summa(${arvo.a}, ${arvo.b})= ${arvo.odotettu}`, function(){
            expect(summa(arvo.a, arvo.b)).to.be.closeTo(arvo.odotettu, 0.01);
        });
    });
    
});

describe('Testataan poikkeus "vain numerot sallittuja"', function(){
    const testiArvot=[
        {a:'1', b:'2', odotettu:"vain numerot sallittuja", teksti:"summa('1','2')"},
        {a:'a', b:1, odotettu:"vain numerot sallittuja", teksti:"summa('a', 1)"},
        {a:1, b:'a', odotettu:"vain numerot sallittuja", teksti:"summa(1,'a')"},
        {a:'a', b:'b', odotettu:"vain numerot sallittuja", teksti:"summa('a','b')"},
        {a:'', b:'', odotettu:"vain numerot sallittuja", teksti:"summa('','')"},
        {a:null, b:1, odotettu:"vain numerot sallittuja", teksti:"summa(null,'1')"},
        {a:1, b:null, odotettu:"vain numerot sallittuja", teksti:"summa(1, null)"},
        {a:undefined, b:1, odotettu:"vain numerot sallittuja", teksti:"summa(undefined,1)"},
        {a:1, b:undefined, odotettu:"vain numerot sallittuja", teksti:"summa(1,undefined)"},
    ];
    testiArvot.forEach(function(arvo){
        it(`${arvo.teksti} aiheuttaa poikkeuksen ${arvo.odotettu}`, function(){
            expect(function(){
                summa(arvo.a, arvo.b);
            }).to.throw(arvo.odotettu);
        });
    });
});

describe('testataan puuttuva parametri', function(){
    it('summa() aiheuttaa poikkeuksen "parametri puuttuu"', function(){
        expect(function(){
            summa();
        }).to.throw('parametri puuttuu');
    });
    const testiArvot=[
        {a:1, odotettu:'parametri puuttuu', teksti:'summa(1)'},
        {a:'a', odotettu:'parametri puuttuu', teksti:'summa(a)'},
        {a:'', odotettu:'parametri puuttuu', teksti:'summa("")'}
    ];
    testiArvot.forEach(function(arvo){
        it(`${arvo.teksti} aiheuttaa poikkeuksen ${arvo.odotettu}`, function(){
            expect(function(){
                summa(arvo.a);
            }).to.throw(arvo.odotettu);
        });
    });
});

describe('Testataan erotukset kokonaisluvuilla', function(){
    const testiArvot=[
        {a:1, b:1, odotettu:0},
        {a:2, b:3, odotettu:-1},
        {a:100, b:12, odotettu:88},
        {a:2, b:-4, odotettu:6},
        {a:-4, b:6, odotettu:-10},
        {a:-3, b:-5, odotettu:2},
        {a:0, b:0, odotettu:0},
        {a:0, b:3, odotettu:-3},
        {a:3, b:0, odotettu:3},
        {a:0, b:-3, odotettu:3},
    ];
    testiArvot.forEach(function(arvo){
        it(`erotus(${arvo.a}, ${arvo.b})= ${arvo.odotettu}`, function(){
            expect(erotus(arvo.a, arvo.b)).to.equal(arvo.odotettu);
        });
    });
});

describe('testataan erotus desimaaleilla', function(){ 
    const testiArvot=[
        {a:1, b:1, odotettu:0},
        {a:2, b:3, odotettu:-1},
        {a:100, b:12, odotettu:88},
        {a:2, b:-4, odotettu:6},
        {a:-4, b:6, odotettu:-10},
        {a:-3, b:-5, odotettu:2},
        {a:0, b:0, odotettu:0},
        {a:0, b:3, odotettu:-3},
        {a:3, b:0, odotettu:3},
        {a:0, b:-3, odotettu:3},
    ];
    testiArvot.forEach(function(arvo){
        it(`erotus(${arvo.a}, ${arvo.b})= ${arvo.odotettu}`, function(){
            expect(erotus(arvo.a, arvo.b)).to.be.closeTo(arvo.odotettu, 0.01);
        });
    });
    
});

