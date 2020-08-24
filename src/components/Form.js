import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    hadnleUserNameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
        
    }
    handleUserComment = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.hadnleUserNameChange}/>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleUserComment}></textarea>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
           
            </div>
        )
    }
}

export default Form
