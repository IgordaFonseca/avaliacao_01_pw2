import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import RadioButton from "../RadioButton/RadioButton";
const Formulario = (props) => {
  const secoesLoja = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadjets",
  ];
  const marcas = ["Huawei", "HP", "Del", "Corsair", "Stean"];

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  //const [imagem, setImagem] = useState('')
  const [secaoLoja, setSecaoLoja] = useState("Computadores");
  const [marca, setMarca] = useState("Hwawei");
  const [condicaoProduto, setCondicaoProduto] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdutoCadastrado(
        {
            "nome":nome,
            "preco":preco,
            "secaoLoja":secaoLoja,
            "marca":marca,
            "condicaoProduto":condicaoProduto
        }
    )
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Dados do produto</h1>
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do produto"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Preco"
          placeholder="Digite o preço do produto"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
        />
        <ListaSuspensa
          label="Seção da loja"
          itens={secoesLoja}
          valor={secaoLoja}
          aoAlterado={(valor) => setSecaoLoja(valor)}
        />
        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <RadioButton
          label="Condição do produto"
          name="condicao"
          aoAlterado={(valor) => setCondicaoProduto(valor)}
        />
        <Botao texto="Cadastrar produto" />
      </form>
    </section>
  );
};
export default Formulario;
