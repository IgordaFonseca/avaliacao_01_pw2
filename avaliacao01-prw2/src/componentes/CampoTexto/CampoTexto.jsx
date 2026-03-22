
import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

  const aoAlterado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoAlterado}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
