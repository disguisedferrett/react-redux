const template = document.createElement('template');
template.innerHTML= `
<style>
div{
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
}
ostos-kori, p{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}
p{
    font-weight: bold;
    color: blue;
    font-size:16pt;
    margin-left:11%;
    margin-top: 23%;
    background-color: yellow;
    width: fit-content;
    height: fit-content;
}
</style>

<div>
<ostos-kori leveys="100" tausta="beige"></ostos-kori>
<p id="arvo">0</p>
</div>
`;

export class Korinaytto extends HTMLElement{
    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['arvo', 'leveys'];
    }
}