import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [search, setSearch] = useState(null);
  const [pokemons, setPokemons] = useState(null);

  console.log(pokemons);
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((d) => setPokemons(d));
  }, []);

  const searchedPokemons = search
    ? search
      ? pokemons.filter((item) => item.name.includes(search))
      : pokemons
    : null;

  function handleSearch(text) {
    setSearch(text);
  }

  function handleSubmit(formName, formHP, formFrontSprite, formBackSprite) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formName,
        hp: formHP,
        sprites: {
          front: formFrontSprite,
          back: formBackSprite,
        },
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        let newPokemonsArray = [...pokemons, d];
        setPokemons(newPokemonsArray);
      });
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      {pokemons ? (
        <PokemonCollection pokemons={search ? searchedPokemons : pokemons} />
      ) : null}
    </Container>
  );
}

export default PokemonPage;
