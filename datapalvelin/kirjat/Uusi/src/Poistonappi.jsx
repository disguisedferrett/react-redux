const poistoUrl ='http://localhost:4009/rest/kirjat/';

function Poistonappi({id, paivita}){
    async function poista(e){
        e.preventDefault();

        const optiot={
            method:'DELETE',
            modde:'cors'
        };
        const tulos = await fetch(`${poistoUrl}${id}`,optiot);
        const status=await tulos.json();
        console.log(status);
        paivita();
    }

    return (
        <button onClick={poista}>Poista</button>
    )
}


export default Poistonappi;