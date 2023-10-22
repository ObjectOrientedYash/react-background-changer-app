import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [percent, setPercent] = useState<number | null>(null);
  const [numOfPeople, setNumOfPeople] = useState<number | null>(null);
  const [perperson, setPerPerson] = useState<number | null>(null);

  const calculateTip = () => {
    if (amount === null || isNaN(amount)) {
      alert('Enter a valid bill amount to calculate tip');
      return;
    }

    if (percent === null || isNaN(percent)) {
      alert('Enter a valid tip percentage to calculate tip');
      return;
    }

    if (numOfPeople === null || isNaN(numOfPeople) || numOfPeople <= 0) {
      alert('Enter a valid number of people to calculate tip per person');
      return;
    }

    const totalTipPerPerson = (amount * (percent / 100)) / numOfPeople;
    setPerPerson(totalTipPerPerson);
  };

  return (
    <div className="bg-gray-100 p-4 w-1/2 mx-auto mt-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Tip Calculator</h1>
      <div className="mb-4">
        <label htmlFor="billamount" className="block font-medium">
          Enter Bill Amount
        </label>
        <input
          type="number"
          id="billamount"
          className="border rounded-md p-2 w-full"
          value={amount === null ? '' : amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tippercent" className="block font-medium">
          Tip Percentage
        </label>
        <input
          type="number"
          id="tippercent"
          className="border rounded-md p-2 w-full"
          value={percent === null ? '' : percent}
          onChange={(e) => setPercent(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numofpeople" className="block font-medium">
          Number of People
        </label>
        <input
          type="number"
          id="numofpeople"
          className="border rounded-md p-2 w-full"
          value={numOfPeople === null ? '' : numOfPeople}
          onChange={(e) => setNumOfPeople(parseFloat(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={calculateTip}
      >
        Calculate Tip
      </button>
      {perperson !== null && (
        <div className="mt-4">
          <p className="font-semibold">
            Total Tip Per Person: {perperson.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
