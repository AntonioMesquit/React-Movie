import { Container, Alinhamento} from "./style";
import { Input } from "../input";
import { Link } from "react-router-dom"
export function Header(){
    return(
    <Container>
     
     <h1>RocketMovies</h1>

     <Input placeholder="Pesquise pelo titulo..."/>
     
     <Alinhamento>
        <div>
        <h1>Antonio Mesquita</h1>
        <p>sair</p>
        </div>
   
   <Link to="/profile">
   <button>
   <img src="https://github.com/AntonioMesquit.png" alt="Antonio Mesquit"/>
   </button>
   </Link>
     </Alinhamento>

    </Container>
    )
}