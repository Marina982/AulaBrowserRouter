import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home(){

    return(
        <>

        <p>Minha Home</p>
        <Header/>
<Carousel
infiniteLoop
useKeyboardArrows
autoPlay
showArrows
showStatus
showThumbs
dynamicHeight

>
    
</Carousel>
        
        
        </>
        
    );
}