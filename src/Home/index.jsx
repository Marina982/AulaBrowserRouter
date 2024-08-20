import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "../globals.css";
import Footer from "../components/Footer";

export default function Home(){

    return(
        <>

        <h2>Jogos</h2>

        
        
        <Header/>


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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpeogfPzt4JaC8DEeL0NQwmzgZo-wnVyXSg&s" alt="Slide 1" />
                
                </div>

                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpeogfPzt4JaC8DEeL0NQwmzgZo-wnVyXSg&s" alt="Slide 1" />
                
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpeogfPzt4JaC8DEeL0NQwmzgZo-wnVyXSg&s" alt="Slide 1" />
                
                </div>

      
            </Carousel>

        <Footer title={"Desenvolvedor: Marina Goes"} />

        
        </>
        
    );
}