import { Link } from "react-router-dom";


export default function Header({title}){

    return(
        <>
     <h1>{title}</h1>



        <nav>
<ul>
    <Link to="/">
    <li>Home</li>
    </Link>
    <Link to="/oferta">
    <li>Ofertas</li>
    </Link>
    <Link to="/produtos">
    <li>Produtos</li>
    </Link>
</ul>
        </nav>

        </>
    )
}