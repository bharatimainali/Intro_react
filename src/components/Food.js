import React from 'react';

const Food = ({ food }) => {
    return (
        <ul>
            {food.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
export default Food;
