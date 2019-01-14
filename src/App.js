import React, { Component } from 'react';
import Header from './components/Header';
import Players from './components/Players';
import Form from './components/Form';
import playerList from './data/playerData';

class App extends Component {
  state = { players: playerList, selected: [] }

  handleScoreChange = (id, value) => {
    let { players } = this.state;
    players[id].score += value 
    this.setState({ players })
  }

  addPlayer = name => {
    const { players } = this.state
    players.push({name: name, id: players.length, score: 0})
    this.setState({ players })
  }

  removePlayer = id => {
    let { players } = this.state;
    players = players.filter(r => r.id !== id)
    this.setState({ players })
  }

  getHighScore = () => {
    const { players } = this.state 
    const scores = players.map(player => player.score)
    const highScore = Math.max(...scores)
    if (highScore) return highScore 
  }

  handleSelectPlayer = id => {
    let { selected } = this.state 
    if (!selected.includes(id)) selected.push(id)
    else selected = selected.filter(i => i !== id)
    this.setState ({ selected })
  }
  render() {
    const { players, selected } = this.state
    const highScore = this.getHighScore()
    return (
      <div className="Scoreboard">
        <Header players={players} title="Scoreboard" />
        <Players 
        list={players} changeScore={this.handleScoreChange} removePlayer={this.removePlayer} highScore={highScore} selected={selected} selectPlayer={this.handleSelectPlayer}/>
        <Form addPlayer={this.addPlayer}/> 
      </div>
    );
  }
}

export default App;
