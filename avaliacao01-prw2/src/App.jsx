import "./App.css";
import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";

function App() {
  const [produtos, setProdutos] = useState([]);
  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };
  return (
    <div>
      <Banner />
      <Formulario aoProdutoCadastrado={(produto) => adicionaProduto(produto)} />
    </div>
  );
}

export default App;
