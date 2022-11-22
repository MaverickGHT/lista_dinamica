import Elemento from "./Elemento/Elemento";


function Contenitore (props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Contenitore;