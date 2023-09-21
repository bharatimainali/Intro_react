import React, { useState } from 'react';
import Title from './components/Title';
import Food from './components/Food';
import Alert from './components/Alert';
import Wrapper from './components/Wrapper';

const App = () => {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    const [inputValue, setInputValue] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const toggleIsClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Wrapper>
            <Title title="It works" />
            <Food food={food} />
            <Alert setInputValue={setInputValue} toggleIsClicked={toggleIsClicked} /> {isClicked && <p>{inputValue}</p>}{' '}
        </Wrapper>
    );
};

export default App;
