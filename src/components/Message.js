import React, { Component } from 'react'

class Message extends Component {
    constructor()
    {
        super();
    
        this.state = {

            message: 'Welcome visitor'
        
        }
    }
    changeMessage()
    {
        this.setState({
            message: 'Thnaks for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change</button>
            </div>
        )
    }
}

export default Message
