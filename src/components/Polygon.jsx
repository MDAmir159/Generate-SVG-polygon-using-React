import React, { useState } from 'react';

const Pentagon = () => {
  const [selectedColor, setSelectedColor] = useState('Click a triangle to see its ID');

  const handleClick = (id) => {
    setSelectedColor(id);
  };

  return (
    <div>
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Pentagon Outline */}
        <polygon points="100,20 20,80 40,180 160,180 180,80" fill="none" stroke="black" />
        {/* Triangle 1 */}
        <polygon id="red" points="100,20 100,100 20,80" fill="red" stroke="black" onClick={() => handleClick('red')} />
        {/* Triangle 2 */}
        <polygon id="blue" points="20,80 100,100 40,180" fill="blue" stroke="black" onClick={() => handleClick('blue')} />
        {/* Triangle 3 */}
        <polygon id="green" points="40,180 100,100 160,180" fill="green" stroke="black" onClick={() => handleClick('green')} />
        {/* Triangle 4 */}
        <polygon id="orange" points="160,180 100,100 180,80" fill="orange" stroke="black" onClick={() => handleClick('orange')} />
        {/* Triangle 5 */}
        <polygon id="purple" points="180,80 100,100 100,20" fill="purple" stroke="black" onClick={() => handleClick('purple')} />
      </svg>
      <div style={{ fontSize: '20px', marginTop: '20px' }}>{selectedColor}</div>
    </div>
  );
};

export default Pentagon;
