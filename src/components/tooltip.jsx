import React from "react";
import "./tooltip.css";

const Tooltip = ({subtext,maintext}) => {
  return (
    <div className="tooltip" style={{ top: `${center}`, bottom: `${bottom}` }}>
      <h4>{maintext}</h4>
      <p>{subtext}</p>
    </div>
  );
}

 
 export default Tooltip 