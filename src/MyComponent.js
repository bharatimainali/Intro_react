import React, { useState } from 'react';
import Title from './components/Title';
import Food from './components/Food';
import Alert from './components/Alert';
import Wrapper from './components/Wrapper';

export const MyComponent = () => {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    const [inputValue, setInputValue] = useState('');

    const handleAlertButtonClick = () => {
        console.log(inputValue);
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <Wrapper>
            <Title title="It works" />
            <Food food={food} />

            <Alert type="success" message="Success! This is a success alert" />
            <input type="text" onChange={handleInputChange} value={inputValue} />
            <button onClick={handleAlertButtonClick}>Click Me</button>
            <p>{inputValue}</p>
        </Wrapper>
    );
};
