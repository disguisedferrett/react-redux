import { Tuotetiedot } from "./tuotekomponentti.js";

if(!customElements.get('tuote-elementti')){
    customElements.define('tuote-elementti', Tuotetiedot);
}
