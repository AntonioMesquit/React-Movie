import {Container, Form, Avatar} from './style'
import { Back } from '../../components/Back'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'
export default function Profile(){
    return(
        <Container>
        <header>
        <Link to="/">
        <Back title="Voltar" icon={FiArrowLeft}/>
        </Link>
        </header>

        <Form>
            <Avatar>
            <img src="https://github.com/AntonioMesquit.png" alt="Foto do usuario" />
            <label htmlFor="avatar">
                <FiCamera/>
                <input
                 id="avatar"
                type='file'
                />
            </label>

            </Avatar>
        <Input placeholder="Nome" icon={FiUser} type="text"/>
        <Input placeholder="Email" icon={FiMail} type="text"/>
        <Input placeholder="Senha atual" icon={FiLock} type="password"/>
        <Input placeholder="Nova senha" icon={FiLock} type="password"/>
        <Button title="Salvar"/>
        </Form>

        </Container>
    )
}