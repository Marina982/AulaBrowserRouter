import { Link } from "react-router-dom";
import "../globals.css";

export default function ListarProdutos({listaProdutos, adicionarProdutoPedido}){
    return(

        <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto) =>
            <div key={produto.id} className="propriedades">
                <img src={produto.imagem}/>
<p>{produto.item}</p>
<p>{produto.preco}</p>
<p>{produto.marca}</p>
<button onClick={() =>
     adicionarProdutoPedido(produto)}>Comprar</button>
            </div>
            )
        }
        </div>
        </div>
    
        
    )
}