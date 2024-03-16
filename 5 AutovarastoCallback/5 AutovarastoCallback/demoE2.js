'use strict'

const hae=require('./autovarastoCPromise');

    (async () => {
        try {
            const tulos=
                await Promise.all([hae(),hae('malli', 'Hoppa'),hae('rekisteri', 'ÅL-23')]);
            console.log(tulos)

        }
        catch (err) {
            console.log(err.message);
        }
    })();