import React, { Component } from 'react'
import { Button, Form, Header, Image, Modal, file } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class EditProfileForm extends Component {  
    state = { 
        open: false, 
        name: this.props.userProfile.name,
        age: this.props.userProfile.age,
        img: "",
        gender: "",
        username: "",
        password: ""
      };
    

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true, ...this.props.userProfile })
    }  
    close =()=> this.setState({open: false})
   
    
        handleChange = e => {
              this.setState({[e.target.name]: e.target.value})
          };
    
          handleFormSubmit = e => {
            e.preventDefault();
            this.props.editUser(this.state);
            
          };
    
    
    
      render() {
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
        
        return(
          this.props.newSignUp ? ( <Redirect to="/login"/> ) : (
         
          <>
         <Button onClick={this.closeConfigShow(false, true)}>
          Edit Profile
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content>
            <p>Please add info about you </p>
          </Modal.Content>
      
    
          <h3 className="form-title">Update your profile here</h3>
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
            <Image src={this.state.age} />
            <input type="text" name="img" value={this.state.img}onChange={this.handleChange} placeholder="Profile Image" />
          </div>
          {/* <div className="field">
            <label>Gender</label>
            <input type="text" name="gender" value={this.props.userProfile.gender} onChange={this.handleChange} placeholder="Gender URL" />
          </div> */}
          {/* <div className="field">
            <label>username</label>
            <input type="text" name="username" value={this.props.userProfile.username} onChange={this.handleChange} placeholder="username" />
          </div> */}
          {/* <div className="field">
            <label>Password</label>
            <input type="password" name="password" value={this.props.userProfile.password} onChange={this.handleChange} placeholder="Password" />
          </div> */}
          {/* <button type="submit" className="ui button">Submit</button> */}
        </form>
        <Modal.Actions>
             <Button  onClick={this.close} negative>
            Close
                </Button> 
            <Button
           
              onClick={this.handleFormSubmit}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Submit'
              
            />
          </Modal.Actions>
        </Modal>
        </>
          )
        )
      }
    }
    


export default EditProfileForm