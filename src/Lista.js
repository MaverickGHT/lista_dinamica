import lista_oggetti from "./lista_oggetti";
import Contenitore from "./Contenitore";

function Lista() {

    
  return (
    <Contenitore>
    <ul>
      {lista_oggetti.map((elemento) => (
        <li key={elemento.id}>
          {elemento.nome}
          <img src={elemento.immagine} width="25%" height="25%" />
          {elemento.id}
        </li>
      ))}
    </ul>
    </Contenitore>
  );
}

export default Lista;
