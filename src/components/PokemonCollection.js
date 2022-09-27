import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  console.log(pokemons);
  let pokemonsMap = pokemons.map((mon) => (
    <PokemonCard mon={mon} key={mon.id} />
  ));
  return <Card.Group itemsPerRow={6}>{pokemonsMap}</Card.Group>;
}

export default PokemonCollection;
