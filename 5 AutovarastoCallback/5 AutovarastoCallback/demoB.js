'use strict';

const hae = require('./autovarastoBCallback');

hae(console.log);
console.log('eka');
hae(console.log,'malli','Hoppa');
console.log('toka');
hae(data=>console.log(data),'rekisteri','ÅL-23');
console.log('kolmas');
hae(tulostaData,'malli','Kaara');
console.log('neljäs')


function tulostaData(data){
    console.log('##############');
    console.log(data);
    console.log('##############');
}