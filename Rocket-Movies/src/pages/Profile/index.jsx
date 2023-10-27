import {Container, Form, Avatar} from './style'
import { Back } from '../../components/Back'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
export default function Profile(){
    const {user, updateProfile} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    const navigate = useNavigate()

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,

        }
        await updateProfile({user})
        navigate("/")
        
    }
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
        <Input placeholder="Nome" icon={FiUser} type="text" value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder="Email" icon={FiMail} type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Senha atual" icon={FiLock} type="password"  onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder="Nova senha" icon={FiLock} type="password"  onChange={e => setPasswordNew(e.target.value)}/>
        <Button title="Salvar" onClick={handleUpdate}/>
        </Form>

        </Container>
    )
}