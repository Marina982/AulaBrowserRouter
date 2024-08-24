import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "../globals.css";
import Footer from "../components/Footer";
import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";



export default function Home(){

    const [listaProdutos, setProdutos] = useState([
        {

            id: 1,

            item: "Tênis Adidas Breaknet",

            imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/90/NQQ-4379-890/NQQ-4379-890_zoom1.jpg?ts=1711641809&ims=326x",

            preco: "R$ 99,99",

            marca: "Adidas",

            descricao:[
                "Social, ",
                "Branco e Listras Pretas"
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
                "Branco com Listras",
            ]

        },

        {

            id: 9,

            item: "Tênis Everlast Racer",

            imagem: "https://static.netshoes.com.br/produtos/tenis-everlast-racer-unissex/58/AXB-7183-158/AXB-7183-158_zoom2.jpg?ts=1700223666&ims=326x",

            preco: "R$ 199,99",

            marca: "EverLast",

            descricao:[
                "Esportivo, ",
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
                "Casual, ",
                "Vermelho"
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
                "Branco com listras"
            ]

            

        },
     

        

        


    ]);

    

    const [listaPedidos, setPedidos] = useState([]);
    const adicionarProdutoPedido = (produto) => {
        setPedidos([...listaPedidos, produto]);

     }







    return(
        <>
<div className="cab">
     <Header title={"SHO&S:"}/>
     </div>
    
        
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             className="carousel">
                <div className="carou">
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-19/1702_desk_sportstyle.png" alt="Slide 1" />
                
                </div>

                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-20/5484_APP.gif" alt="Slide 1" />
                
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-20/1699_prontos_pro_corre.png" alt="Slide 1" />
                
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-06-16/2708_full-desktop.jpg" alt="Slide 1" />
                
                </div>

                

                
      
            </Carousel>


            
            
    
    
        <div>
         <ListarProdutos 
         listaProdutos={listaProdutos} 
         />
</div>
         
        
            
            
        <div className="rodaape">
        <Footer title={"Desenvolvedor: Marina Goes"} />
        </div>

        
        </>
        
    );



}