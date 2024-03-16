'use strict';

function summa(a,b){
    if(arguments.length<2){
        throw new Error('parametri puuttuu');
    }
    if(typeof a !== 'number' || typeof b !=='number'){
        throw new Error('vain numerot sallittuja');
    }
   
    return a+b;
}

function erotus(a, b) {
    if (arguments.length < 2) {
        throw new Error('parametri puuttuu');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('vain numerot sallittuja');
    }

    return a - b;
}

module.exports={summa,erotus}