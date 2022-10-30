

import React from "react";

const LinkInfo = ({ title, subText }) => {
  return (
    <>
      <div className="">
        <div className="">
          {title && (
            <p>
              <strong>{title}</strong>
            </p>
          )}
          {subText && <span>{subText}</span>} 
        </div>
      </div>
    </>
  ); 
};

export default LinkInfo