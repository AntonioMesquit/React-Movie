import { createContext, useContext} from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
    async function signIn({email, password}){

        try{
            const response = await api.post("/sessions" , {email, password});
           const {user, token} = response.data
           console.log(user,token)
        }catch(error){
             if(error.response){
                alert(error.response.data.message)
             }
             else{
                alert("nao foi possivel entrar")
             }
        }
    }
    return (
        <AuthContext.Provider value={{signIn}}>
        {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context  
}
export {AuthProvider, useAuth}