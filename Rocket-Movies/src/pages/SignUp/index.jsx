import { Container, Form, Content, Background } from "./style";
import { Input } from "../../components/input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/button";
import { Back } from "../../components/Back";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export  default function SignUp() {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp(){
 if(!name || !email || !password){
  return alert("Preencha todos os campos")
 }
 api.post("/users" , {name,email,password})
 .then(() => {
  alert("Usuario cadastrado com sucesso!")
  navigate("/")
 })
 .catch(
  error => {
    if(error.response){
      alert(error.response.data.message)
    }
    else{
      alert("Nao foi possivel cadastrar")
    }
  }
 )


  }

  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Form>
          <Input
           icon={FiUser}
            placeholder="Nome"
            type="text"
            onChange={e => setName(e.target.value)}
            />
          <Input icon={FiMail}
           placeholder="E-mail"
           type="email"
           onChange={e => setEmail(e.target.value)}
           />
          <Input icon={FiLock}
           placeholder="Senha"
           type="password"
           onChange={e => setPassword(e.target.value)}
           />
          <Button title="Entrar" onClick={handleSignUp} />
          
        </Form>
        <Link to="/">
        <Back title="Voltar para o login" icon={FiArrowLeft}/>
        </Link>
      </Content>
      <Background />
    </Container>
  );
}
