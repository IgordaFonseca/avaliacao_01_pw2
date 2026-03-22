import "./Produto.css";

const Produto = ({ produto }) => {
    console.log(produto.marca);
  return (
    <div className="produto">
    <img src={getLogoMarca(produto.marca)} alt={produto.marca} />
      <p><strong>Nome:</strong> {produto.nome}</p>
      <p><strong>Preço:</strong> {produto.preco}</p>
      <p><strong>Seção:</strong> {produto.secaoLoja}</p>
      <p><strong>Marca:</strong> {produto.marca}</p>
      <p><strong>Condição:</strong> {produto.condicaoProduto}</p>
    </div>
  );
  
};

const getLogoMarca = (marca) => {
  if (!marca) return "";

  const mapas = {
    huawei: "/imagens/LogoHuawei.png",
    hp: "/imagens/LogoHp.jpg",
    dell: "/imagens/logoDel.png",
    corsair: "/imagens/logoCorsair.png",
    steam: "/imagens/logoStean.webp",
  };

  return mapas[marca.trim().toLowerCase()];
  
};

export default Produto;
