import lista_oggetti from "./lista_oggetti";
import Contenitore from "./Contenitore";
import Elemento from "./Elemento/Elemento";

function Lista() {

    
  return (
    <Contenitore>
    <ul>
      {lista_oggetti.map((elemento) => <Elemento/>)}
    </ul>
    </Contenitore>
  );
}

export default Lista;
