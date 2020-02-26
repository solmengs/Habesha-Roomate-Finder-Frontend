import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'
import InterestForm from '../InterestForm'
import InterestCard from './InterestCard'

class UserCard extends Component {




    render() {
        return (
            <div>
                 
    
         

         <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
      <Image src={this.props.userProfile.img} wrapped ui={false} />
      </Grid.Column>
      <Grid.Column width={11}>
      <>
          <h2> 
            Name: {this.props.userProfile.name}
            </h2>
                      
            <p>  {this.props.AddInterest.interest}</p>
   
                        <h3> Age:  {this.props.userProfile.age}</h3>

                     
                    <EditProfileForm editUser={this.props.editUser} userProfile={this.props.userProfile}/>
                    
                    
          
                    
                  <InterestForm AddInterest={this.props.AddInterest} userProfile={this.props.userProfile}/>
                  <InterestCard AddInterest={this.props.AddInterest}/>
                </>  
  </Grid.Column>
  <button className="ui button"  onClick={this.handleDeleteButton}>Delete tenants</button>
  
    </Grid.Row>

    
  </Grid>












    
         
       
           
            
          </div>
        )}
    
}
export default UserCard 