import {Container, Form, Avatar} from './style'
import { Back } from '../../components/Back'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
export default function Profile(){


    const {user, updateProfile} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
    const navigate = useNavigate()

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,

        }

        const userUpdate = Object.assign(user, updated)
    
        await updateProfile({user, avatarFile})
        
        navigate("/")
        
    }
    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)

        setAvatar(imagePreview)

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
            <img src={avatar} alt="Foto do usuario" />
            <label htmlFor="avatar">
                <FiCamera/>
                <input
                 id="avatar"
                type='file'
                onChange={handleChangeAvatar}
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