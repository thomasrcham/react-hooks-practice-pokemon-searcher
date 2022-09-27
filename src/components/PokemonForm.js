import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const [formName, setFormName] = useState();
  const [formHP, setFormHP] = useState();
  const [formFrontSprite, setFormFrontSprite] = useState();
  const [formBackSprite, setFormBackSprite] = useState();

  function handleFormNameChange(value) {
    setFormName(value);
  }
  function handleFormHPChange(value) {
    setFormHP(value);
  }
  function handleFormFrontSpriteChange(value) {
    setFormFrontSprite(value);
  }
  function handleFormBackSpriteChange(value) {
    setFormBackSprite(value);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          handleSubmit(formName, formHP, formFrontSprite, formBackSprite);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={(e) => handleFormNameChange(e.target.value)}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={(e) => handleFormHPChange(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => handleFormFrontSpriteChange(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => handleFormBackSpriteChange(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
