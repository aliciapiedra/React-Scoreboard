import React from 'react';
import Player from './Player';

const Players = ({ list, changeScore, removePlayer, highScore, selected, selectPlayer}) => (
    <div>
        { 
            list.map((player, i) => <Player key={i} player={player} changeScore={changeScore} removePlayer={removePlayer} isHighScore={highScore === player.score} selected={selected} selectPlayer={selectPlayer}/> ) 
        }
    </div>
)

export default Players