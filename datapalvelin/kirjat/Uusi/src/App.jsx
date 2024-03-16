// import Appvanha from "./Appvanha";
import { useState, useEffect } from 'react';
//import Haku from './Haku';
import Kaikki from './Kaikki';
import KaikkiTaulukko from './KaikkiTaulukko';
import KirjaLisatiedot from './KirjaLisatiedot';
import OstoskoriKasvattaja from './OstoskoriKasvattaja';
import Kasvattaja from './Kasvattaja';
import TilausTaulukko from './TilausTaulukko';
import Kirjalomake from './Kirjalomake';
import { kaikkiUrl, haeYksiUrl } from './urlit';

function App() {
  const [tulos, setTulos] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);//edit
  const [ostoskori, setOstoskori] = useState({});
  const [tilaukset, setTilaukset] = useState([]);
  const [naytaTilaus, setNaytaTilaus] = useState(false);
  const [naytaLisatiedot, setNaytaLisatiedot ] = useState(false);
  const [haeYksi, setHaeYksi]=useState([]);

  const perusUrlKaikki = 'http://localhost:3009/kirjat';
  const kuvaUrl = 'http://localhost:3009/kirjat/kuvat?nimi=';
  const tilausUrl = 'http://localhost:3010/tilaukset';

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
    hae(rowId);
  };

  const paivitaOstos = (id, tilaus) => {
    console.log(id, tilaus);
    const uusiOstoskori = { ...ostoskori };
    uusiOstoskori[id] = tilaus;
    console.log(uusiOstoskori);
    setOstoskori(uusiOstoskori)

  };

  const tehtyTilaus = () => {
    const uudetTilaukset = [...tilaukset, ostoskori];
    setTilaukset(Object.values(ostoskori));
    console.log(uudetTilaukset);
    setNaytaTilaus(true);
  };
  const hae = async id =>{
    const data = await fetch(`${haeYksiUrl}${id}`, {mode:'cors'});
    const hakuYksitulos = await data.json();
    console.log(hakuYksitulos)
    if(hakuYksitulos){
        setHaeYksi(hakuYksitulos);
    }
}

  function paivitaTiedot(){
    haeKaikki();
  };

  function toggleLisatiedot(){
    setNaytaLisatiedot(!naytaLisatiedot);
    hae(selectedRow);
  }



  return (
    <>
      <KaikkiTaulukko
        tulos={tulos}
        paivita={toggleDetails}
        selectedRow={selectedRow}
        paivitaTilaus={paivitaOstos}
      />
      {naytaLisatiedot && haeYksi.length>0 && <KirjaLisatiedot kirjatiedot={haeYksi[0]} />}
      <button onClick={tehtyTilaus}>Tee tilaus</button>
      <button onClick={toggleLisatiedot}>Lisatiedot</button>

      {naytaTilaus && <TilausTaulukko tilaukset={tilaukset} />}
      
    </>
    // <Appvanha />
  );
}

export default App;