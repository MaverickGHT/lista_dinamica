import Titolo from "./Titolo";
import Immagine from "./Immagine";
import lista_oggetti from "../lista_oggetti";


function Elemento () {
    return (
        <div>
        {lista_oggetti.map ((elemento) =>
        {
            return (
            <li>
            <Titolo nome={elemento.nome} key={elemento.id} />
            <Immagine immagine = {elemento.immagine} key={elemento.id}/>
            </li>)})}
            </div>
    );
}

export default Elemento;