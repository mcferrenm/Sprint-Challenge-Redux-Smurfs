import React from "react";

const SmurfForm = props => {
  return (
    <div className="smurf-form">
      <form>
        <input
          type="text"
          name="name"
          value={props.smurfInputs.name}
          autoComplete="off"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="age"
          value={props.smurfInputs.age}
          autoComplete="off"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="height"
          value={props.smurfInputs.height}
          autoComplete="off"
          onChange={props.handleChange}
        />
        {props.isEditingSmurfs ? (
          <button onClick={props.handleUpdateSmurf}>Update Smurf</button>
        ) : (
          <button onClick={props.handleAddSmurf}>Add Smurf</button>
        )}
      </form>
    </div>
  );
};

export default SmurfForm;
