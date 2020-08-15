import React,{Component} from 'react'

class Counter extends Component{
    constructor()
    {
        super()
        this.state = {
         count: 1
        }
    }

    increment()
    {
        // When just to update count value use setState and if code has to be excuted after setState use arrow function as a second argument.

        // this.setState({
        //     count: this.state.count+1
        // }, () => console.log(this.state.count))

        // When you have to update the state based on prev state, pass in a function as an argument instead of an object
        this.setState(prevState => 
            ({
                count: prevState.count+1
            })
        )
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render()
    {
        return(
            <div>
                <p>Count: {this.state.count}</p>
                {/* <button onClick={() => this.increment()}>Increase</button> */}
                <button onClick={() => this.incrementFive()}>Increase five times</button>
            </div>
        )
    }
}

export default Counter