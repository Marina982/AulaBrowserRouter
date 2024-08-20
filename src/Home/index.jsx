import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "../globals.css";
import Footer from "../components/Footer";

export default function Home(){

    const [listaProdutos, setProduto] = useState([
        {id: 1, Nome: "jogo1", preco: "10,20"},
        {id: 2, Nome: "jogo2", preco: "17,20"},
        {id: 3, Nome: "jogo3", preco: "33,20"},
        {id: 3, Nome: "jogo3", preco: "33,20"},
        {id: 3, Nome: "jogo3", preco: "33,20"}
]);

    return(
        <>

{
          listaProdutos.map((jogos)=>
            <div key={jogos.id}>
              <p>{jogos.Nome}</p>
              <p>{jogos.preco}</p>
              <button onClick={()=> adicionarJogos(jogos)}>Selecionar</button>
            </div>    )
        }
        
     <Header title={"Jogos"}/>
    
        


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