import { Container, Form, Content, Background } from "./style";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/button";
import { Back } from "../../components/Back";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export default function SignIn() {
const [email, setEmail ] = useState("")
const [password, setPassword ] = useState("")
const {signIn} = useAuth()
function handleSingIn(){
  signIn({email, password})
}
  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Form>
          <Input icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="Senha" type ="password"onChange={e => setPassword(e.target.value)}/>
          <Button title="Entrar" onClick={handleSingIn}/>
          
        </Form>
        <Link to="/register">
        <Back title="Criar Conta" />
        </Link>
      </Content>

      <Background />
    </Container>
  );
}
