import React, { Component } from 'react'

export class ClassClick extends Component {
    
    buttonClick()
    {
        console.log('Click Occured')
    }
    
    render() {


        return (
            <div>
                <button onClick={this.buttonClick}>Click Here</button>
            </div>
        )
    }
}

export default ClassClick
