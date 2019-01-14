import React from 'react';
import Counter from './Counter';
import Icon from './Icon'; 


const Player = ({ player, changeScore, removePlayer, isHighScore, selected, selectPlayer}) => (
    <div className="player">
        <span onClick={() => selectPlayer(player.id)}className="player-name">
            <button onClick={() => removePlayer(player.id)} className="remove-player">✖</button>
            <Icon isHighScore={isHighScore}/>
            <span style={{color: selected.includes(player.id) ? 'red' : 'black'}}> {player.name } </span>
        </span>
        <Counter id={player.id} score={player.score} changeScore={changeScore}/>
    </div>
)

export default Player; 