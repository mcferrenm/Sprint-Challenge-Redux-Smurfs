import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={e => props.handlePopulateInputs(e, props.smurf.id)}>
        Update
      </button>
      <button onClick={e => props.handleDeleteSmurf(e, props.smurf.id)}>
        Delete
      </button>
    </div>
  );
};

export default Smurf;
