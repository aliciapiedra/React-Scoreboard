import React from 'react';


const Stats = ({ players }) => {
    const totalPlayers = players.length
    const totalPoints = players.reduce((finalValue, player) => finalValue + player.score, 0)
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ totalPlayers } </td>
                </tr>
                <tr>
                    <td>Total Points</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    )
} 

export default Stats