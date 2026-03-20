import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h1>Dados do produto</h1>
        <CampoTexto label="Nome" placeholder="Digite o nome do produto" />
        <CampoTexto label="Preco" placeholder="Digite o preço do produto" />
      </form>
    </section>
  );
};
export default Formulario;
