import React, { useState } from "react";
import { Link } from "react-router-dom";

const DynamicTextBoxes = () => {
  const [textBoxes, setTextBoxes] = useState([""]); // Array to store textbox values

  // Function to handle changes in textbox values
  const handleTextBoxChange = (index, value) => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes[index] = value;
    setTextBoxes(newTextBoxes);
  };

  // Function to add a new textbox
  const addTextBox = () => {
    setTextBoxes([...textBoxes, ""]);
  };

  // Function to remove a textbox
  const removeTextBox = (index) => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.splice(index, 1);
    setTextBoxes(newTextBoxes);
  };

  // Function to calculate the sum of all textbox values
  const calculateSum = () => {
    let sum = 0;
    textBoxes.forEach((value) => {
      sum += parseFloat(value) || 0;
    });
    return sum.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {textBoxes.map((value, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded mr-2"
            value={value}
            onChange={(e) => handleTextBoxChange(index, e.target.value)}
          />
          <button className="text-red-500" onClick={() => removeTextBox(index)}>
            Delete
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={addTextBox}
      >
        Add
      </button>
      <div className="mt-4">Total: {calculateSum()}</div>

      <Link to="/todo">
        <button className="bg-blue-500 text-white py-2 px-4 rounded fixed top-6 right-6">
          To do
        </button>
      </Link>
    </div>
  );
};

export default DynamicTextBoxes;
