import Titolo from "./Titolo";
import Immagine from "./Immagine";
import lista_oggetti from "../lista_oggetti";


function Elemento () {
    return (
        <div>
        {lista_oggetti.map ((elemento) =>
        {
            return (
            <li key={elemento.id}>
            <Titolo nome={elemento.nome} />
            <Immagine immagine = {elemento.immagine} />
            </li>)})}
            </div>
    );
}

export default Elemento;