import React, { useState } from 'react';

const Selection = ({ selectedColor }) => {
  const [boxColor, setBoxColor] = useState(""); 

  const handleBoxClick = () => {
    if (selectedColor) {
      setBoxColor(selectedColor); 
    }
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: boxColor,textAlign:"center",color:'white',padding:"10px" }} 
      onClick={handleBoxClick} 
    >
        Selection
    </div>
  );
};

export default Selection;
