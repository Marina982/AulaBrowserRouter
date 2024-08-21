import Header from "../components/Header"
import Footer from "../components/Footer"
import "../globals.css";
import { useState } from "react";

export default function Oferta(){

    const [listaProdutos, setProdutos] = useState([
        {

            id: 1,

            item: "Tenis1",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/90/NQQ-4379-890/NQQ-4379-890_zoom1.jpg?ts=1711641809&ims=326x",

            preco: "R$ 99,99"

        },

        {

            id: 2,

            item: "Tenis 2",

            imagem: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/06/2FU-6367-006/2FU-6367-006_zoom1.jpg?ts=1714414001&ims=326x",

            preco: "R$ 99,99"

        },

        {

            id: 3,

            item: "Tenis 3",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673&ims=326x",

            preco: "R$ 99,99"

        },

        {

            id: 4,

            item: "Tenis 4",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/26/NQQ-4378-326/NQQ-4378-326_zoom1.jpg?ts=1705669997&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 5,

            item: "Tenis 5",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg?ts=1721239502&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 6,

            item: "Tenis 6",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-vs-pace-20-masculino/24/FB9-3767-024/FB9-3767-024_zoom2.jpg?ts=1715088300&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 7,

            item: "Tenis 7",

            imagem: "https://static.netshoes.com.br/produtos/tenis-puma-rbd-game-bdp/24/2I3-5479-024/2I3-5479-024_zoom1.jpg?ts=1695699428&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 8,

            item: "Tenis 8",

            imagem: "https://static.netshoes.com.br/produtos/tenis-puma-smash-v2/26/D14-4129-026/D14-4129-026_zoom2.jpg?ts=1705507349&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 9,

            item: "Tenis 9",

            imagem: "https://static.netshoes.com.br/produtos/tenis-everlast-racer-unissex/58/AXB-7183-158/AXB-7183-158_zoom2.jpg?ts=1700223666&ims=326x",

            preco: "R$ 99,99"

        },
        {

            id: 10,

            item: "Tenis 10",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/44/NQQ-4378-044/NQQ-4378-044_zoom1.jpg?ts=1706119674&ims=326x",

            preco: "R$ 99,99"

        },


        


    ]);


    const [listaPedidos, setPedidos] = useState([]);
    const adicionarProdutoPedido = (produto) => {
        setPedidos([...listaPedidos, produto]);

     }


    return(
        <div>
            <div> <Header title={"Sapatos Oferta!!"}/></div>
            
        

        
        <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto) =>
            <div key={produto.id}>
                <img src={produto.imagem}/>
<p>{produto.item}</p>
<p>{produto.preco}</p>
<button onClick={() =>
     adicionarProdutoPedido(produto)}>Comprar</button>
            </div>
            )
        }
         </div>
         </div>



         <div className="RodaOfer">
            <Footer title={"Desenvolvedor: Marina Goes"}/>
         </div>
         
         </div>


         
    )


    
}