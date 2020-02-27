import React, { Component } from 'react'
import { Button, Form, Header, Image, Modal } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class InterestForm extends Component {  
    state = { 
        open: false, 
        
        activities: this.props.userProfile.interests.activities,
        note: this.props.userProfile.interests.note
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
            
            this.props.AddInterest(this.state);
            
          };
    
    
    
      render() { console.log(this.props)
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
        
        return(
          this.props.newSignUp ? ( <Redirect to="/login"/> ) : (
         
          <>
         <Button onClick={this.closeConfigShow(false, true)}>
          Add Interests
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Interests</Modal.Header>
          <Modal.Content>
            <p>Please add your interests</p>
         
      <h3 className="form-title">Inter your Interest</h3>
      
          <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Activities</label>
            <input type="text" name="activities" value={this.state.activities} onChange={this.handleChange} placeholder="Activities" />
          </div>
          <div className="field">
            <label>Notes</label>
            <input type="text" name="note" value={this.state.note} onChange={this.handleChange} placeholder="Note" />
          </div>
          
          
        </form>
        </Modal.Content>
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
    


export default InterestForm