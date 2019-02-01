import React from "react";
import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => (
        <Smurf
          key={smurf.id}
          smurf={smurf}
          handlePopulateInputs={props.handlePopulateInputs}
        />
      ))}
    </div>
  );
};

export default SmurfsList;
