'use strict';

const { error } = require('console');
const fs = require('fs');
const tiedostonNimi='./autot.json';
//cbf = callback funktio
module.exports = (cbf, avain, arvo) =>{
    if(typeof cbf !== 'function') {
        throw new Error('callback funktio puuttui');
    }
    fs.readFile(tiedostonNimi,'utf8', (err,data)=>{
        if(err){
            console.log(err)
            cbf([]);
        }
        else{
            let loydetyt=[];
            const autot = JSON.parse(data);
            if (avain && arvo && ['malli', 'rekisteri'].includes(avain)) {
                for (const kaara of autot) {
                    if (kaara[avain] === arvo) {
                        loydetyt.push(kaara);
                    }
                }
            }
            else {
                loydetyt = autot;
            }
            cbf(loydetyt);
        }

    })
}