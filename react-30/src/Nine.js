import React, { useState } from 'react';

function Nine() {
  const [color, setColor] = useState('blue'); // Initial color

  const changeColor = () => {
    // Toggle between blue and red
    setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Nine;