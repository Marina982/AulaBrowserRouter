import { Link } from "react-router-dom";
import "../globals.css";

export default function ListarProdutos({title, listaProdutos, adicionarProdutoPedido}){
    return(
<div>
        <div>
        <h1>{title}</h1>
        </div>
<div>


        
        <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto) =>
            <div key={produto.id} className="propriedades">
                <img src={produto.imagem}/>
<p>{produto.item}</p>
<p>{produto.preco}</p>
<p>{produto.marca}</p>
<p>{produto.descricao}</p>
<button onClick={() =>
     adicionarProdutoPedido(produto)}>Adicionar</button>
            </div>
            )
        }
        </div>
        </div>
        </div>
        </div>
        
    )
}