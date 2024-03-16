'use strict';

const hae=require('../autovarastoCPromise');

describe('Testataan avaimella "rekisteri" resolvea',()=>{
    const odotettu=[
        { "malli": "Hoppa", "rekisteri": "ABC-1" }
    ];

    test('then', ()=>{
        return hae('rekisteri','ABC-1')
            .then(data=>expect(data).toEqual(odotettu));
    });

    test('async-await', async ()=>{
        const data = await hae('rekisteri', 'ABC-1');
        expect(data).toEqual(odotettu);
    });

    test('resolves', ()=>{
        return expect(hae('rekisteri', 'ABC-1'))
            .resolves.toEqual(odotettu);
    });

    test('resolves async', async ()=>{
        await expect(hae('rekisteri', 'ABC-1'))
            .resolves.toEqual(odotettu);
    });
});

describe('Testataan avaimella "rekisteri" rejectia', ()=>{
    test('catch', ()=>{
        // expect.assertions(1);
        return hae().catch(data=>expect(data).toBe('parametri puuttuu'));
    });

    test('async-await', async()=>{
        try{
            await hae();
        }
        catch(err){
            expect(err).toBe('parametri puuttuu');
        }
    });
     test('rejects', ()=>{
         return expect(hae()).rejects.toBe('parametri puuttuu');
     });

     test('rejects-async', async ()=>{
         await expect(hae()).rejects.toBe('parametri puuttuu');
     });
});

describe('testataan avaimella "malli"', ()=>{
    const odotettuHoppa=[
        { "malli": "Hoppa", "rekisteri": "ABC-1" },
        { "malli": "Hoppa", "rekisteri": "GTF-1" }
    ];

    const odotettuKaara = [{ "malli": "Kaara", "rekisteri": "XYZ-12" }];

    test('1. haetaan mallia Kaara',()=>{
        return expect(hae('malli','Kaara')).resolves.toEqual(odotettuKaara);
    });

    test('2. haetaan mallia "Hoppa"',()=>{
        return expect(hae('malli','Hoppa')).resolves.toEqual(odotettuHoppa);
    });

    test('4. haetaan mallia "x"', ()=>{
        return expect(hae('malli','x')).resolves.toEqual([]);
    });
});

describe('testataan avaimella "rekisteri"', ()=>{
    const odotettu = [
        { "malli": "Hoppa", "rekisteri": "ABC-1" }
    ];

    test('3. haetaan rekisteri "ABC-1"', ()=>{
        return expect(hae('rekisteri', 'ABC-1')).resolves.toEqual(odotettu);
    });

    test('3b. haetaan rekisterillä "X",jota ei ole', ()=>{
        return expect(hae('rekisteri', 'x')).resolves.toEqual([]);
    });
});

describe('Testataan puuttuvat tai virheellise parametrit',()=>{
    test('kaikki parametrit puuttuvat',()=>{
        return expect(hae()).rejects.toBe('parametri puuttuu');
    });

    test('Yksi parametri puuttuu', ()=>{
        return expect(hae('malli')).rejects.toBe('parametri puuttuu');
    });

    test('Avain ei ole "malli" tai "rekisteri"', ()=>{
        return expect(hae('x','ABC-1')).rejects.toBe('parametri puuttuu');
    });
})