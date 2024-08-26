import ListarProdutos from "../components/ListarProdutos"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react";

export default function Produtos(){
    const [listaProdutos, setProdutos] = useState([
        {

            id: 1,

            item: "Tênis Adidas Breaknet",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/90/NQQ-4379-890/NQQ-4379-890_zoom1.jpg?ts=1711641809&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social,",
                "Branco"
            ]

        },

        {

            id: 2,

            item: "Tênis ASICS GEL-Kimera",

            imagem: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/06/2FU-6367-006/2FU-6367-006_zoom1.jpg?ts=1714414001&ims=326x",

            preco: "R$ 79,99",

            marca: "Asics",

            descricao:[
                "Social, ",
                "Branco"
            ]

        },

        {

            id: 3,

            item: "Tênis Adidas Breaknet",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]

        },

        {

            id: 4,

            item: "Tênis Adidas Breaknet",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/26/NQQ-4378-326/NQQ-4378-326_zoom1.jpg?ts=1705669997&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]

        },
        {

            id: 5,

            item: "Adidas Esportiva",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg?ts=1721239502&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]

        },
        {

            id: 6,

            item: "Adidas VS Pace 2.0",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-vs-pace-20-masculino/24/FB9-3767-024/FB9-3767-024_zoom2.jpg?ts=1715088300&ims=326x",

            preco: "R$ 87,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]

            

        },
        {

            id: 7,

            item: "Puma RBD",

            imagem: "https://static.netshoes.com.br/produtos/tenis-puma-rbd-game-bdp/24/2I3-5479-024/2I3-5479-024_zoom1.jpg?ts=1695699428&ims=326x",

            preco: "R$ 199,99",

            marca: "PUMA",

            descricao:[
                "Social, ",
                "Branco"
            ]

            

        },
        {

            id: 8,

            item: "Puma Smash",

            imagem: "https://static.netshoes.com.br/produtos/tenis-puma-smash-v2/26/D14-4129-026/D14-4129-026_zoom2.jpg?ts=1705507349&ims=326x",

            preco: "R$ 99,99",

            marca: "PUMA",

            descricao:[
                "Social, ",
                "Branco"
            ]


        },
        {

            id: 9,

            item: "Tênis Everlast Racer",

            imagem: "https://static.netshoes.com.br/produtos/tenis-everlast-racer-unissex/58/AXB-7183-158/AXB-7183-158_zoom2.jpg?ts=1700223666&ims=326x",

            preco: "R$ 199,99",

            marca: "EverLast",

            descricao:[
                "Social, ",
                "Branco"
            ]

            

        },
        {

            id: 10,

            item: "Tenis Breaknet LIfestyle",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/44/NQQ-4378-044/NQQ-4378-044_zoom1.jpg?ts=1706119674&ims=326x",

            preco: "R$ 199,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]

        },
        {

            id: 11,

            item: "Tenis Advantage 2.0",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-advantage-2-0-masculino/14/FB9-8934-114/FB9-8934-114_zoom1.jpg?ts=1723030449&ims=326x",

            preco: "R$ 149,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]


        },
        {

            id: 12,

            item: "Tenis Adidas VI Court Base",

            imagem: "https://static.netshoes.com.br/produtos/tenis-masculino-adidas-vl-court-base-/34/FB9-3766-134/FB9-3766-134_zoom2.jpg?ts=1711639183&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]


        },
        {

            id: 13,

            item: "Tenis Advantage",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-advantage-base-masculino/90/NQQ-0065-890/NQQ-0065-890_zoom2.jpg?ts=1712587528&ims=326x",

            preco: "R$ 199,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]


        },
        {

            id: 14,

            item: "Tenis Adidas Grand Court",

            imagem: "https://static.netshoes.com.br/produtos/tenis-masculino-adidas-grand-court-base/26/FB8-5623-226/FB8-5623-226_zoom2.jpg?ts=1713275762&ims=326x",

            preco: "R$ 199,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]



        },
        {

            id: 15,

            item: "Tenis Adidas Alpha",

            imagem: "https://static.netshoes.com.br/produtos/tenis-couro-adidas-grand-court-alpha-masculino/36/FB9-8951-036/FB9-8951-036_zoom1.jpg?ts=1717501257&ims=326x",

            preco: "R$ 199,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco"
            ]
        },
    ]);
    
    return(
        <div>
            <div className="cab"> 
                <Header title={"SHO&S: Todos"}/>
            </div>
            
            <div>
         <ListarProdutos 
         listaProdutos={listaProdutos} 
         />
</div>

         <div className="rodaape">
            <Footer title={"Desenvolvedor: Marina Goes"}/>
         </div>
         </div>
    );
}