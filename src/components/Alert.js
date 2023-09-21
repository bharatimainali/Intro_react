import React from "react";

const Alert = ({ setInputValue, toggleIsClicked }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    toggleIsClicked();
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default Alert;
