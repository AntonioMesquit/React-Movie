import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { Note } from "../../components/note"
import { Section } from "../../components/section"
import { Container } from "./style"
import {FiPlus} from 'react-icons/fi'
import {Stars} from '../../components/stars'
import { Link, useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    function create(){
   navigate("/new")
    }
    return( 
   <Container>
    <Header/>

    <main>
        <div className="ifos">
            <h1>Meus Filmes</h1>
           <button onClick={create}>
            <FiPlus/>
            Adicionar Filme
           </button>
        </div>
        <div className="linhar">
        <Section>
        <Note data = 
        {{title: "React"
         , 
         rating: 4,
         description: "teste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,teste,",
         tags: [
            {id: '1', name: 'Acao'},
            {id: '2', name: 'Comedia'}
        ]
            
            }}/>
            <Note data = 
        {{title: "React"
         , 
         rating: 3,
         description: "teste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,teste,",
         tags: [
            {id: '1', name: 'Acao'},
            {id: '2', name: 'Comedia'}
        ]
            
            }}/>
            
                        <Note data = 
        {{title: "React"
         , 
         rating: 3,
         description: "teste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,testeteste,teste,teste,teste,teste,",
         tags: [
            {id: '1', name: 'Acao'},
            {id: '2', name: 'Comedia'}
        ]
            
            }}/>
        </Section>
        </div>

    </main>


   </Container>
    )
}