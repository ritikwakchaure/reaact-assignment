import React from 'react'
import { useState } from 'react';
export const Eighteen = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const randomizeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh' }}>
      <input type="color" onChange={randomizeColor} />
    </div>
  );

    
}
