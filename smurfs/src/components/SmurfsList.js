import React from "react";
import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};

export default SmurfsList;
