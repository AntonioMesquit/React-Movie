import { Container, Alinhamento } from "./style";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";
export function Header({ setSearch }) {
  
  const { user , signOut} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquise pelo título..."
        onChange={handleSearchChange}
      />

      <Alinhamento>
        <div>
          <h1>{user.name}</h1>
          <button onClick={signOut}>sair</button>
        </div>

        <Link to="/profile">
          <button>
            <img src={avatarUrl} alt={user.name} />
          </button>
        </Link>
      </Alinhamento>
    </Container>
  );
}
