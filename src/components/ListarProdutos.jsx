import { Link } from "react-router-dom";

export default function ListarProdutos({title, listaProdutos, adicionarProdutoPedido}){
    return(
<div>
        <div>
        <h1>{title}</h1>
        </div>


        <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto) =>
            <div key={produto.id}>
                <img src={produto.imagem}/>
<p>{produto.item}</p>
<p>{produto.preco}</p>
<button onClick={() =>
     adicionarProdutoPedido(produto)}>Adicionar</button>
            </div>
            )
        }
        </div>
        </div>
        </div>
    )
}