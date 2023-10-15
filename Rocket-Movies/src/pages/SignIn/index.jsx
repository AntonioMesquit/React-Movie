import { Container, Form, Content, Background } from "./style";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/button";
import { Back } from "../../components/Back";
import { Link } from "react-router-dom";

export  default function SignIn() {

  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Form>
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
          <Button title="Entrar" />
          
        </Form>
        <Link to="/register">
        <Back title="Criar Conta" />
        </Link>
      </Content>

      <Background />
    </Container>
  );
}
