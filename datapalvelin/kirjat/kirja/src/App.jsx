// import Appvanha from "./Appvanha";
import { useState, useEffect } from 'react';
//import Haku from './Haku';
import Kaikki from './Kaikki';
import KaikkiTaulukko from './KaikkiTaulukko';
import KirjaLisatiedot from './KirjaLisatiedot';
import Ostoskori from './Ostoskori';

function App(){
    const [tulos, setTulos] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);//edit
    const [ostoskori, setOstoskori] = useState({});

    const perusUrlKaikki = 'http://localhost:3009/kirjat';
    const kuvaUrl = 'http://localhost:3009/kirjat/kuvat?nimi=';

    useEffect(() => {
        const haeKaikki = async () => {
            const data = await fetch(perusUrlKaikki, { mode: 'cors' });
            const kirjat = await data.json();
            console.log('abcdefg', kirjat);
            setTulos(kirjat);
        }

        haeKaikki();
    }, []);
    
    const toggleDetails = (rowId) => {
        console.log('abcd', rowId);
        setSelectedRow(rowId === selectedRow ? null : rowId);
    };

    const lisaaOstos = (kirjaId) => {
        setOstoskori((prevOstoskori) => {
          const uusiOstoskori = { ...prevOstoskori };
          uusiOstoskori[kirjaId] = (uusiOstoskori[kirjaId] || 0) + 1;
          return uusiOstoskori;
        });
    };
    
    const vahennaOstos = (kirjaId) => {
      setOstoskori((prevOstoskori) => {
        const uusiOstoskori = { ...prevOstoskori };
        if (uusiOstoskori[kirjaId] > 0) {
          uusiOstoskori[kirjaId] -= 1;
        }
        return uusiOstoskori;
      });
    };

    return (
        <>
           

             <Ostoskori ostoskori={ostoskori} />
             <KaikkiTaulukko tulos={tulos} paivita ={toggleDetails} selectedRow={selectedRow} lisaaOstos={lisaaOstos} vahennaOstos={vahennaOstos}/>
             {selectedRow !== null && <KirjaLisatiedot kirjatiedot={tulos.find((kirja) => kirja.id === selectedRow)}/>}
            
                   
                
        </>
        // <Appvanha />
    )
}

export default App;