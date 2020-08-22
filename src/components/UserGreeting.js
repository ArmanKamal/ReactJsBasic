import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // If Else
            // if(this.state.isLoggedIn)
            //   {
            //     return <div>Welcome Arman</div>
            //   }
            // else{
            //     return <div>Welcome Guest</div>
            // }
        
        // Element variable 

        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vishwas</div>
        // }
        // else{
        //     message = <div>Welcome Nobody</div>
        // }
        // return <div>{message}</div>

        //Ternay Operator

        // return(
        //     this.state.isLoggedIn?<div>Welcome Arman</div>:<div>Welcome Guest</div>
        // )

        // Short circuit operator

        return this.state.isLoggedIn && <div>Welcome Arman</div>
    }
}

export default UserGreeting
