import { useState } from "react";
import { Header } from "../../components/header";
import { Container } from "./style";
import Home from "../Home";

export default function Home2() {
  const [search, setSearch] = useState("");
  
  return (
    <Container>
      <Header setSearch={setSearch} />
      <Home search={search} />
      </Container>
  );
}


