import { Container, Alinhamento} from "./style";
import { Input } from "../input";
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
export function Header(){
  const {signOut, user} = useAuth()
 
    return(
    <Container>
     
     <h1>RocketMovies</h1>

     <Input placeholder="Pesquise pelo titulo..."/>
     
     <Alinhamento>  
        <div>
        <h1>{user.name}</h1>
        <p onClick={signOut}>sair</p>
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