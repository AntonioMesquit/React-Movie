import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    const signInPromise = api.post("/sessions", { email, password })
      .then(response => {
        const { user, token } = response.data;
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ user, token });
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
        localStorage.setItem("@rocketmovies:token", token);
        return { user, token };
      })
      .catch(error => {
        if (error.response) {
          const errs = error.response.data.message;
          throw error.response.data.message;
        } else {
          throw "Não foi possível entrar";
        }
      });

    toast.promise(
      signInPromise,
      {
        pending: "Autenticando...",
        success: "Usuario autenticado com sucesso!",
        error: "Email/Senha invalidos",
        
      }
    );
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:token");
    localStorage.removeItem("@rocketmovies:user");
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    const updateProfilePromise = new Promise(async (resolve, reject) => {
      try {
        if (avatarFile) {
          const fileUploadForm = new FormData();
          fileUploadForm.append("avatar", avatarFile);

          const response = await api.patch("/users/avatar", fileUploadForm);
          user.avatar = response.data.avatar;
        }
        await api.put("/users", user);
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
        
        setData({ user, token: user.data });
        resolve("Perfil atualizado com sucesso!");
      } catch (error) {
        if (error.response) {
          reject(error.response.data.message);
        } else {
          reject("Não foi possível atualizar o perfil");
        }
      }
    });

    toast.promise(
      updateProfilePromise,
      {
        pending: "Atualizando perfil...",
        success: "Perfil atualizado com sucesso!",
        error: "Erro ao atualizar perfil",
  
      }
    );
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut,
      updateProfile
    }}>
      <ToastContainer theme="dark"/>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
