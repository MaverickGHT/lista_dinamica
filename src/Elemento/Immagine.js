import lista_oggetti from "../lista_oggetti";

function Immagine (props) {
    return (
        <div>
        <img src={props.immagine}/>
        </div>
    );
}

export default Immagine;