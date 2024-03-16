// import Appvanha from "./Appvanha";
import {useState} from 'react';
//import Haku from './Haku';
import Kaikki from './Kaikki';
// import KaikkiTaulukko from './KaikkiTaulukko';
//import KaikkiAlekkain from './KaikkiAlekkain';

function App(){

    const [onHaku, setOnHaku]= useState(0);

    return (
        <>
            <button onClick={()=>setOnHaku(3)}>Kaikki</button>

        
            {onHaku ===3 && <KaikkiTaulukko />}
            
                   
                
        </>
        // <Appvanha />
    )
}

export default App;