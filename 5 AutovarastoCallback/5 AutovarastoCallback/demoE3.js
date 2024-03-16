'use strict'

const hae=require('./autovarastoCPromise');

    async function suorita() {
        try {
            console.log(await hae());
            console.log('eka');
            console.log(await hae('malli', 'Hoppa'));
            console.log('toka');
            console.log(await hae('rekisteri', 'ÅL-23'))
            console.log('kolmas');


        }
        catch (err) {
            console.log(err,message);
        }
    };

suorita();