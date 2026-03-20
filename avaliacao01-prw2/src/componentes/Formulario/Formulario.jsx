import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
const Formulario = () => {
    const secoesLoja = [
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadjets'
    ]
    const marcas = [
        'Huawei',
        'HP',
        'Del',
        'Corsair',
        'Stean'
    ]

  return (
    <section className="formulario">
      <form>
        <h1>Dados do produto</h1>
        <CampoTexto label="Nome" placeholder="Digite o nome do produto" />
        <CampoTexto label="Preco" placeholder="Digite o preço do produto" />
        <ListaSuspensa label="Seção da loja" itens={secoesLoja} />
        <ListaSuspensa label="Marca" itens={marcas} />
      </form>
    </section>
  );
};
export default Formulario;
