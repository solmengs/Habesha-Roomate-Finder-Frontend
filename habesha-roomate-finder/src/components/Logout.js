import React, { Component } from 'react'

class Logout extends Component {

handleLogout=()=>{ 
  this.props.logout(this.props)
         }

        

    render() {
        return (
            <div>
               <form className="ui form" onClick={this.handleLogout}></form> 
            </div>
        )
    }
}
export default Logout 