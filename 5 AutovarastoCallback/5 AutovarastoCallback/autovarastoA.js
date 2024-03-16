'use strict';

const autot = require('./autot.json');

module.exports = (avain,arvo) =>{
    let loydetyt=[];
    if(avain && arvo && ['malli','rekisteri'].includes(avain)){
        for(const kaara of autot){
            if(kaara[avain]===arvo){
                loydetyt.push(kaara);
            }
        }
    }
    else{
        loydetyt=autot;
    }
    return loydetyt;
}