import React from 'react';
import { Redirect } from 'react-router-dom'
// import { Button, Form } from 'semantic-ui-react'
const INITIAL_STATE = {
  username: "",
  password: ""

}

class LoginForm extends React.Component {
  state = INITIAL_STATE

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState(INITIAL_STATE)
    console.log("logged in ")
  }

  render() { 
    return(
        this.props.newLogin ? ( <Redirect to="/profile"/> ) : (
      <>
      <h3 className="form-title">Please Login to view your account</h3>
      <form className="ui form" onSubmit={this.handleOnSubmit}>
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="User name" onChange={this.handleOnChange}/>
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={this.handleOnChange}/>
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
    </>
      ))
    
  }
}

export default LoginForm