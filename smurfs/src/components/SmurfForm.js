import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SmurfForm = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={props.smurfInputs.name}
          autoComplete="off"
          onChange={props.handleChange}
          id="name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          type="text"
          name="age"
          value={props.smurfInputs.age}
          autoComplete="off"
          onChange={props.handleChange}
          id="age"
        />
      </FormGroup>
      <FormGroup>
        <Label for="height">Height</Label>
        <Input
          type="text"
          name="height"
          value={props.smurfInputs.height}
          autoComplete="off"
          onChange={props.handleChange}
          id="height"
        />
      </FormGroup>
      {props.isEditingSmurfs ? (
        <Button onClick={props.handleUpdateSmurf}>Update</Button>
      ) : (
        <Button onClick={props.handleAddSmurf}>Add</Button>
      )}
    </Form>
  );
};

export default SmurfForm;
