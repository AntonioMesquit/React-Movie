import { Container, Content } from "./style"
import { Section } from "../../components/section"
import { Back } from "../../components/Back"
import { Header } from "../../components/header"
import { Tag } from "../../components/tag"
import { Stars } from "../../components/stars"
import { FiClock } from 'react-icons/fi'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export default function Details() {

  const [data, setData] = useState([])
  const [dataUser, setDataUser] = useState([])
  const [notes, setNotes] = useState([]);
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [minuto, setMinuto] = useState("");
  const [mess, setMess] = useState("");
  const [ano, setAno] = useState("");
  const params = useParams()
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`notes/${params.id}`)
      
      setData(response.data)
     
      const dataAtual = response.data.created_at
      
      const [ano, diae] = dataAtual.split(" ")
      const [anos, mes, dias] = ano.split("-") 
      const [lixo , anoFormatad] = anos.split("0")
      setAno(anoFormatad)
      setDia(dias)
      setMess(mes)
      const [horas,minutos,segundo] = diae.split(":")
      const horaCorreta = (Number(horas) - 3)
      setHora(horaCorreta)
      setMinuto(minutos)




      console.log(horaCorreta)
      
    }
   
    
    fetchNotes()
      }, [])

    
  return (
    <Container>
      <Header />
{
  data && 
      <Content>
        <Link to="/">
        <Back title="Voltar"/>
        </Link>
        <div className="titleMovie">
          <h1>{data.title}</h1>
          <Stars rating={data.rating}/>

        </div>
        <div className="infos">
          <img src={avatarUrl} alt={user.name} />
          <p>{user.name}</p>
          <p className="ico"><FiClock /></p>
          <p>{`${dia}/${mess}/${ano} às ${hora}:${minuto}` }</p>
         
        </div>

      {
        data.tags &&
        <div className="tags">
          {
            data.tags.map(tag => (
              <Tag
              key={String(tag.id)}
              title={tag.name}

              />
            ))
         
        }
        </div>
        }
        <p className="text-user">
        {data.description}

        </p>
      </Content>
    }
    </Container>

  )
}

