import React, { useState } from 'react';

const ColorChanger: React.FC = () => {
  const [hexValue, setHexValue] = useState<string>('');
  const [randomNum1, setRandomNum1] = useState<number>(0);
  const [randomNum2, setRandomNum2] = useState<number>(0);
  const [randomNum3, setRandomNum3] = useState<number>(0);

  const rgbToHex = (r: number, g: number, b: number): string => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const setColor = () => {
    const newRandomNum1 = Math.floor(Math.random() * 100);
    const newRandomNum2 = Math.floor(Math.random() * 200);
    const newRandomNum3 = Math.floor(Math.random() * 300);

    setRandomNum1(newRandomNum1);
    setRandomNum2(newRandomNum2);
    setRandomNum3(newRandomNum3);

    const newHexValue = rgbToHex(newRandomNum1, newRandomNum2, newRandomNum3);
    setHexValue(newHexValue);

    document.body.style.background = `rgb(${randomNum1},${randomNum2},${randomNum3})`;
  };

  return (
    <div id="container">
      <button onClick={setColor} className="button">
        Change Color
      </button>
      <h2 className="background">
        background color :{' '}
        <span className="color">{hexValue ? hexValue : '#f1f5f8'} </span>
      </h2>
    </div>
  );
};

export default ColorChanger;
