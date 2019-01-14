import React, { Component } from 'react'; 

class Form extends Component {
    state = { name: ''}
    handleNameChange = event => {
    let { name } = this.state
    name = event.target.value
    this.setState({ name })  
    }

    handleSubmit = event => {
        const { name } = this.state
        event.preventDefault()
        this.props.addPlayer( name )
    }
    render() {
        const { name } = this.state 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Player's Name" value={name} onChange={this.handleNameChange}/>
                <input type="submit" value="Add Player" />
            </form>
        )
    }
}

export default Form 