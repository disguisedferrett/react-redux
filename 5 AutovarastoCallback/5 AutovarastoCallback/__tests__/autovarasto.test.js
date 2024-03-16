'use strict'

const hae= require('../autovarastoBCallback');

describe('testataan callback', ()=>{
    test('haetaan rekisterillä ABC-1',done=>{
        function cb(data){
            try{
                expect(data).toEqual([
                    { "malli": "Hoppa", "rekisteri": "ABC-1"}
                ])
                done();

            }
            catch(err){
                done(err);
            }
        }//cb loppuu

        hae(cb,'rekisteri','ABC-1')
    });
});

describe('testataan callback test.each:lla',()=>{
    const testiArvot=[
        ['rekisteri', 'X',[]],
        ['malli','Hoppa',[
                            {"malli":"Hoppa", "rekisteri":"ABC-1"},
                            {"malli":"Hoppa", "rekisteri":"GTF-1"}
                        ]                
        ],
        ['rekisteri', 'ÅL-23',[{"malli":"Bil", "rekisteri":"ÅL-23"}]]
    ];
    test.each(testiArvot)('%s = %s',(avain,arvo,odotettu,done)=>{
        function cb(data){
            try{
                expect(data).toEqual(odotettu);
                done();
            }
            catch(err){
                done(err);
            }
        }//cb loppu

        hae(cb,avain,arvo);
    });
});

describe('testataan puuttuva callback-funktio',()=>{
    test('puuttuva callback aiheuttaa poikkeuksen',()=>{
        expect(() => hae('malli', 'Hoppa')).toThrow('callback funktio puuttui');
    });
});