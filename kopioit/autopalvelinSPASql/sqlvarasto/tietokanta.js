'use strict';

const mariadb=require('mariadb');

module.exports = class Tietokanta{

    constructor(optiot){
        this.optiot=optiot;
    }

    suoritaKysely(sql, parametrit){
        return new Promise(async (resolve,reject)=>{
            let yhteys;
            try{
                yhteys=await mariadb.createConnection(this.optiot);

                const kyselynTulos=await yhteys.query(sql,parametrit);

                if(typeof kyselynTulos ==='undefined'){
                    reject('Kyselyvirhe');
                }
                else if(typeof kyselynTulos.affectedRows === 'undefined'){
                    resolve({kyselynTulos, tulosjoukko:true});
                }
                else{
                    resolve({
                        kyselynTulos:{
                            muutetutRivitLkm: kyselynTulos.affectedRows,
                            lisattyNro:kyselynTulos.insertId,
                            status:kyselynTulos.warningStatus
                        },
                        tulosjoukko:false
                    });
                }

            }
            catch(virhe){
                reject(`SQL-virhe: ${virhe}`);
            }
            finally{
                if(yhteys) yhteys.end();
            }
        })
    }
}