'use strict';

function muunna(muunnettavaOlio){
    const tilaus = JSON.parse(JSON.stringify(muunnettavaOlio));
    tilaus.tilausnumero=+tilaus.tilausnumero;

    for(const tuote of tilaus.tuotteet){
        tuote.tuotenumero=+tuote.tuotenumero;
        tuote.määrä=+tuote.määrä;
        tuote.hinta=+tuote.hinta;        
    }
    return tilaus;
}

module.exports={muunna}