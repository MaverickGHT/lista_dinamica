import Titolo from "./Titolo";
import Immagine from "./Immagine";
import lista_oggetti from "../lista_oggetti";


function Elemento (props) {
    return (
        <div>
            <Titolo nome={props.nome}/>
            <Immagine immagine = {props.immagine}/>
            </div>
    );
}

export default Elemento;