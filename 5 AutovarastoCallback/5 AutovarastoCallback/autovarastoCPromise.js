'use strict';

const fs = require('fs');
const tiedostonNimi='./autot.json';

module.exports = (avain, arvo) =>{
    return new Promise( (resolve,reject)=>{
        fs.readFile(tiedostonNimi, 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                reject(err);
            }
            else {
                let loydetyt = [];
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
                resolve(loydetyt);
            }
        }); //readFile loppu
    }); //Promise loppu  
} //funktion loppu