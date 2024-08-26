import "../globals.css";

export default function ListarProdutos({listaProdutos}){
    return(

        <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto) =>
            <div key={produto.id} className="propriedades">
                <img src={produto.imagem}/>
<p>{produto.item}</p>
<p className="preco">{produto.preco}</p>
<p>{produto.marca}</p>

{
   produto.descricao.map((descricao) => 
    <p key={descricao} className="descpers">{descricao}</p>
    
   )
}

<button onClick={() =>
     adicionarProdutoPedido(produto)}>Comprar</button>
            </div>
            )
        }
        </div>
        </div>
    
        
    );
}