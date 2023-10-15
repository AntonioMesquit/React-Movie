import { Container, Form, Content, Background } from "./style";
import { Input } from "../../components/input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Back } from "../../components/Back";

export  default function SignUp() {



  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Form>
          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
          <Button title="Entrar" />
          
        </Form>
        <Link to="/">
        <Back title="Voltar para o login" icon={FiArrowLeft}/>
        </Link>
      </Content>
      <Background />
    </Container>
  );
}
