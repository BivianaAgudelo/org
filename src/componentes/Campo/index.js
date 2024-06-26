import "./Campo.css";

const Campo = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`;

    // ! Destructuración

    const { type = "text" } = props;

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
            {/* <input placeholder={props.placeholder}/> */}
        </div>
    );
};

export default Campo;
