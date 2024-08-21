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
     

        

        


    ]);

    const [listaPedidos, setPedidos] = useState([]);
    const adicionarProdutoPedido = (produto) => {
        setPedidos([...listaPedidos, produto]);

     }







    return(
        <>
<div className="cab">
     <Header title={"SHO&S"}/>
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
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-19/1702_desk_sportstyle.png" alt="Slide 1" />
                
                </div>

                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-20/5484_APP.gif" alt="Slide 1" />
                
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-20/1699_prontos_pro_corre.png" alt="Slide 1" />
                
                </div>

      
            </Carousel>


            
            
    
    
        <div>
         <ListarProdutos title={"Lista de produtos"} 
         listaProdutos={listaProdutos} 
         adicionarProdutoPedido={adicionarProdutoPedido}/>
</div>
         
        
            
            
        <div className="rodaape">
        <Footer title={"Desenvolvedor: Marina Goes"} />
        </div>

        
        </>
        
    );



}