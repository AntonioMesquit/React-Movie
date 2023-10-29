import { createContext, useContext, useState, useEffect} from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})
    async function signIn({email, password}){
  
       

        try{
            const response = await api.post("/sessions" , {email, password});
           const {user, token} = response.data
           console.log(user,token)
           api.defaults.headers.common['Authorization'] = `Bearer ${token}`
           //colocar o token em todas as requisicoes que o usuario vai fazer
           setData({user,token})
           localStorage.setItem("@rocketmovies:user" , JSON.stringify(user))
           localStorage.setItem("@rocketmovies:token" , token)
           //adicionar token e usuario no local storage


        }catch(error){
             if(error.response){
                alert(error.response.data.message)
             }
             else{
                alert("nao foi possivel entrar")
             }
        }
    }
   function signOut(){
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")
    setData({})
   }
   async function updateProfile({user ,avatarFile}){
    try{

        if(avatarFile){
            const fileUploadForm = new FormData()
            fileUploadForm.append("avatar" , avatarFile)

            const response = await api.patch("/users/avatar" , fileUploadForm)
            user.avatar = response.data.avatar
        }
        await api.put("/users" , user)
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
        
        setData({user, token: user.data})
        alert("perfil atualizado com sucesso!")


    }catch(error){
        if(error.response){
           alert(error.response.data.message)
        }
        else{
           alert("nao foi possivel entrar")
        }
   }
   }
    useEffect(() => {
   const token =  localStorage.getItem("@rocketmovies:token")
   const user =  localStorage.getItem("@rocketmovies:user")

   if(token && user){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({
        token,
        user: JSON.parse(user)
        //transformar de texto para objeto
    })
   }
    } , [])
    return (
        <AuthContext.Provider value={{
        signIn,
         user: data.user,
         signOut,
         updateProfile,
         }}>
        {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context  
}
export {AuthProvider, useAuth}