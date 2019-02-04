import React from "react";
import { Button, Card } from "reactstrap";

const Smurf = props => {
  return (
    <Card>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <Button onClick={e => props.handlePopulateInputs(e, props.smurf.id)}>
        Update
      </Button>
      <Button onClick={e => props.handleDeleteSmurf(e, props.smurf.id)}>
        Delete
      </Button>
    </Card>
  );
};

export default Smurf;
