import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ mon }) {
  const [clicked, setClicked] = useState(false);
  return (
    <Card>
      <div onClick={() => setClicked(!clicked)}>
        <div className="image">
          {clicked ? (
            <img src={mon.sprites.back} alt={mon.name} />
          ) : (
            <img src={mon.sprites.front} alt={mon.name} />
          )}
        </div>
        <div className="content">
          <div className="header">{mon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {mon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
