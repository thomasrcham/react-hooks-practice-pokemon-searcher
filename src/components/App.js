import { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  // function handleSubmit(formName, formHP, formFrontSprite, formBackSprite) {
  //   fetch("http://localhost:3001/pokemon", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: formName,
  //       hp: formHP,
  //       sprites: {
  //         front: formFrontSprite,
  //         back: formBackSprite,
  //       },
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((d) => console.log(d));
  // }

  return (
    <div className="App">
      <PokemonPage
      // handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
