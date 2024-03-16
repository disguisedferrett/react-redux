'use strict';

const fs = require('fs');
const tiedostonNimi='./autot.json';

module.exports = (avain, arvo) =>{
    fs.readFile(tiedostonNimi,'utf8', (err,data)=>{
        if(err){
            console.log(err)
            return [];
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
            return loydetyt;
        }

    })
}