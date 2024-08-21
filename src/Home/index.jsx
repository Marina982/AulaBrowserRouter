import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "../globals.css";
import Footer from "../components/Footer";


export default function Home(){


    return(
        <>

     <Header title={"Sapatos"}/>
    
        


        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
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
            




        <div className="rodaape">
        <Footer title={"Desenvolvedor: Marina Goes"} />
        </div>

        
        </>
        
    );



}