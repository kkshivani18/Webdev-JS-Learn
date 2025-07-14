import React, { useState, useRef } from 'react';

const Assignment4 = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const numParasRef = useRef(1);

  const generateParagraphs = () => {
    const numParas = numParasRef.current.value;
    const newParagraphs = Array.from({ length: numParas }, (_, index) => `This is paragraph ${index + 1}`);
    setParagraphs(newParagraphs);
  };

  return (
    <div>
      <h1>Paragraph Generator</h1>
      <input
        type="number"
        ref={numParasRef}
        defaultValue="1"
        min="1"
      />
      <button onClick={generateParagraphs}>Generate Paragraphs</button>
      <div>
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default Assignment4;
