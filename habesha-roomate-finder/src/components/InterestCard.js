import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react'



class InterestCard extends Component {




    render() { console.log(this.props, " interestsssss")
        return (
            <div>
                 
      <Grid>
     
    
         
            <Card.Content>
            
    {/* <Card.Header>{this.props.userProfile.name}</Card.Header> */}
              <Card.Meta>
                <span className='date'>{this.props.AddInterest.interests.activities}</span>
              </Card.Meta>
              <Card.Meta>
                <span className='date'>{this.props.AddInterest.interests.note}</span>
              </Card.Meta>
              
            </Card.Content> 
            </Grid>
          </div>
        )}
    
}
export default InterestCard