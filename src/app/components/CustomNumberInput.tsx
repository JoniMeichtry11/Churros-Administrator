import React from 'react';
import './../styles/calculator.css';

interface CustomNumberInputProps {
  value: number;
  onValueChange: (value: number) => void;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({ value, onValueChange }) => {
  const decrement = () => {
    onValueChange(value - 1);
  };

  const increment = () => {
    onValueChange(value + 1);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    if (!isNaN(Number(newValue))) {
      onValueChange(Number(newValue));
    }
  };
  
  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700"
          name="custom-input-number"
          onChange={(e) => change(e)}
          value={value}
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CustomNumberInput;
