import React from 'react';

const Counter = ({ id, score, changeScore }) => (
    <div className="counter">
        <button onClick={() => changeScore(id, -1)}className="counter-action decrement" disabled={score === 0}> - </button>
        <span className="counter-score">{score}</span>
        <button onClick={() => changeScore(id, 1)} className="counter-action increment"> + </button>
    </div>
)

export default Counter 