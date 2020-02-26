import React, { Component } from 'react'

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
        this.props.history.push("/login")
    }
        

    render() {
        return (
            <div>
               <h2>Logging out...</h2> 
            </div>
        )
    }
}
export default Logout 