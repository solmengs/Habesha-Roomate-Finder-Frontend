import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const INITIAL_STATE = {
    name: "",
    age: "",
    img: "",
    gender: "",
    username: "",
    password: ""
  };

class SignupForm extends React.Component {
    state = INITIAL_STATE;

    handleChange = e => {
          this.setState({ [e.target.name]: e.target.value })
      };

      handleFormSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState(INITIAL_STATE);
        
      };



  render() {
    return(
      this.props.newSignUp ? ( <Redirect to="/login"/> ) : (
     
      <>
     
  

      <h3 className="form-title">Please sign up to create an account</h3>
      <form className="ui form" onSubmit={this.handleFormSubmit}>
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
      </div>
      <div className="field">
        <label>age</label>
        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="age" />
      </div>
      <div className="field">
        <label> Image</label>
        <input type="text" name="img" value={this.state.img} onChange={this.handleChange} placeholder="Profile Image" />
      </div>
      <div className="field">
        <label>Gender</label>
        <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} placeholder="Gender URL" />
      </div>
      <div className="field">
        <label>username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
    </>
      )
    )
  }
}

export default SignupForm