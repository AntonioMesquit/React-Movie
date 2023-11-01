import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Container } from "./style";
import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export default function Home({ search }) {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function create() {
    navigate("/new");
  }

  function handleDetails(id){
  navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <main>
        <div className="ifos">
          <h1>Meus Filmes</h1>
          <button onClick={create}>
            <FiPlus />
            Adicionar Filme
          </button>
        </div>
        <div className="linhar">
          <Section>
            {notes.map((note) => (
              <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
            ))}
          </Section>
        </div>
      </main>
    </Container>
  );
}
