import React, { useState } from "react";
import "./RadioButton.css";

const RadioButton = (props) => {
  const [valor, setValor] = useState("");

  const aoAlterado = (evento) => {
    const novoValor = evento.target.value;
    setValor(novoValor);

    if (props.aoAlterado) {
      props.aoAlterado(novoValor);
    }
  };

  return (
    <div className="radio-button">
      <label>{props.label}</label>

      <div>
        <input
          type="radio"
          name={props.name}
          value="Novo"
          checked={valor === "Novo"}
          onChange={aoAlterado}
        />
        <label>Novo</label>
      </div>

      <div>
        <input
          type="radio"
          name={props.name}
          value="Usado"
          checked={valor === "Usado"}
          onChange={aoAlterado}
        />
        <label>Usado</label>
      </div>
    </div>
  );
};

export default RadioButton;