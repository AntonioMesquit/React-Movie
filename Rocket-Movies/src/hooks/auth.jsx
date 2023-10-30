import { createContext, useContext, useState, useEffect} from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
           toast.success("Usuario autenticado com sucesso!" , {
            theme: "dark"
           })


        }catch(error){
             if(error.response){
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    
             }
             else{
                toast.error("nao foi possivel entrar" , {
                    theme: "dark"
                })
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
        toast.success("perfil atualizado com sucesso!" , {
            theme: "dark"
        })


    }catch(error){
        if(error.response){
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else{
           toast.error("nao foi possivel entrar")
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
         <ToastContainer />
        {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context  
}
export {AuthProvider, useAuth}