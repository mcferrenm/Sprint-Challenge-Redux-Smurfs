import React from "react";

const SmurfForm = props => {
  return (
    <div className="smurf-form">
      <form action="">
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
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;
