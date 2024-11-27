import React, { useState } from "react";

export const Five = () => {
  const [isToggle, setToggle] = useState(false);

 const handleToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggle ? "On" : "OFf"}</p>
    </div>
  );
};
