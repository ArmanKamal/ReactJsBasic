import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
    constructor(props) {
        super(props)
        console.log('LifecycleA constructor')
        this.state = {
             name: 'Arman'
        }
       
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleA getDerivedStateFromProps') 
        return null
    }

    componentDidMount()
    {
        console.log('LifecycleA ComponentDidMount')
    }

    shouldComponentUpdate()
    {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('LifecycleA getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifecycleA componentDidUpdte')
    }
    
    changeState = () =>{
        this.setState({
            name: 'John'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
        <div>

          <LifecycleB />
          <button onClick={this.changeState}>Click</button>
        </div>
               
      
        )
    }
}

export default LifecycleA
