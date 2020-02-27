import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid, Segment, Header } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'
import InterestForm from '../InterestForm'
import ActivitiesCard from './ActivitiesCard'
import NoteCard from './NoteCard'

class UserCard extends Component {

  eachActivities = () => {
      if (this.props.userProfile.interests){
      return this.props.userProfile.interests.map(y => {
          return <ActivitiesCard interest={y} deletetenants={this.props.deletetenants}/>
        }
          )}
      }

  eachNote = () => {
        if (this.props.userProfile.interests){
        return this.props.userProfile.interests.map(x => {
            return <NoteCard interest={x} deletetenants={this.props.deletetenants}/>
          }
            )}
        }


    render() {
        return (
  <>
   <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
          <Image src={this.props.userProfile.img} wrapped ui={false} />
      </Grid.Column>
          <Grid.Column width={11}>
          <>
              
          <h2> Name: {this.props.userProfile.name}</h2>
          <p>{this.props.AddInterest.interest}</p>     
          <h3> Age:  {this.props.userProfile.age}</h3>                
          <EditProfileForm editUser={this.props.editUser} userProfile={this.props.userProfile}/>      
          
          
            <Segment>
            
              <Header as='h3'>Activities</Header>
              {this.eachActivities()}
            </Segment>
              <Segment>
                <Header as='h3'>Note</Header> 
                {this.eachNote()}
              </Segment>
          
          
          <InterestForm AddInterest={this.props.AddInterest} userProfile={this.props.userProfile} AddInt={this.props.AddInt}/>
                      
                    </>  
      </Grid.Column>
        <button className="ui button"  onClick={this.handleDeleteButton}>Delete tenants</button>
  
    </Grid.Row>
  </Grid>
 </>
 )}
    
}
export default UserCard 