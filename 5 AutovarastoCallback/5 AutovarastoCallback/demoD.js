'use strict';

const hae = require('./autovarastoCPromise');

hae().then(console.log).catch(console.log);
console.log('eka');
hae('malli', 'Hoppa').then(console.log).catch(console.log);
console.log('toka');
hae('rekisteri', 'ÅL-23')
    .then(data=>console.log(data))
    .catch(err=>console.log(err.message));
console.log('kolmas');