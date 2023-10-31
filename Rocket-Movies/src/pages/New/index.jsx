import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { NoteItem } from "../../components/noteItem"
import { TextArea } from "../../components/textarea"
import { Container, Content ,Form } from "./style"
import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function New(){
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [rating, setRating] = useState("")


   const [tags, setTags] = useState([]);
   const [newTag, setNewTag] = useState("");
   const navigate = useNavigate()
   function handleAddTag(){
      setTags(prevState => [...prevState, newTag]);
      setNewTag("") 

   }
   function handleRemoveTag(deleted){
      setTags(prevState => prevState.filter(tag => tag !== deleted))

   }

   async function handleNewNote(){

      if(!title){
         return toast.error("Adicione um titulo!" , {
            theme: "dark"
         })
      }
      if(!rating || rating < 1 || rating > 5){
         return toast.error("A nota so pode ser entre 1 a 5" , {
            theme: "dark"
         })
      }
      if(!description){
         return toast.error("Adicione alguma descricao!" , {
            theme: "dark"
         })
      }
      if(newTag){
         return toast.error("Voce tentou adicionar uma tag, mas esqueceu de clicar no botao de adicionar" , {
            theme: "dark"
         })
      }
      if(tags.length === 0){
         return toast.error("Adicione pelo menos uma tag" , {
            theme: "dark"
         })
      }
     
      await api.post("notes" , {
         title,
         description,
         tags,
         rating,

      })
      toast.success("nota criada com sucesso!" , {
         theme: "dark"
      })
      navigate("/")
   
   }
   function handleDescartNote(){
      toast.success("Nota descartada" , {
         theme: "dark"
      })
      navigate("/")
   }
   
    return(
      
        <Container>
       

            <Content>
            <main>
             <header>
                <a href="/"> <FiArrowLeft/> Voltar</a>
                <h1>Novo filme</h1>
             </header>

             <Form>
             <div>
                <Input type="text"
                 placeholder="Titulo"
                 onChange={e => setTitle(e.target.value)}
                 
                 />
                <Input
                 type="number"
                  placeholder="Sua nota (de 0 a 5)"
                  onChange={e => setRating(e.target.value)}
                  />
             </div>
             <TextArea
              placeholder="Observacoes"
              onChange={e => setDescription(e.target.value)}
              />
             </Form>
             <p className="marc">Marcadores</p>
             <div className="ss">
             {tags.map((tag, index) => (
              <NoteItem
               key={String(index)}
                value={tag} 
                onClick={() => handleRemoveTag(tag)}
                
                />
            ))}
                <NoteItem
               
                 $isnew
                 placeholder="Nova categoria"
                 onChange={(e) => setNewTag(e.target.value)}
                 value={newTag}
                 onClick={handleAddTag}
                  
                  />
             </div>
             <div className="exit">
                <Button title="Descartar alteracoes" onClick ={handleDescartNote}/>
                <Button title="Salvar" onClick={handleNewNote}/>
             </div>
             </main>
            </Content>
        </Container>
    )
}