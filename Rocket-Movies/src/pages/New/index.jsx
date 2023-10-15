import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { NoteItem } from "../../components/noteItem"
import { TextArea } from "../../components/textarea"
import { Container, Content ,Form } from "./style"
import { FiArrowLeft } from "react-icons/fi"

export default function New(){
    return(
        <Container>
            <Header/>

            <Content>
            <main>
             <header>
                <a href="/"> <FiArrowLeft/> Voltar</a>
                <h1>Novo filme</h1>
             </header>

             <Form>
             <div>
                <Input type="text" placeholder="Titulo"/>
                <Input type="number" placeholder="Sua nota (de 0 a 5)"/>
             </div>
             <TextArea placeholder="Observacoes"/>
             </Form>
             <p className="marc">Marcadores</p>
             <div className="ss">
                <NoteItem value="Acao"/>
                <NoteItem $isnew placeholder="Novo marcador"/>
             </div>
             <div className="exit">
                <Button title="Excluir filme"/>
                <Button title="Salvar"/>
             </div>
             </main>
            </Content>
        </Container>
    )
}