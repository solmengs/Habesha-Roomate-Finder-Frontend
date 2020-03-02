import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid, Segment, Header,Divider } from 'semantic-ui-react'



class ActivitiesCard extends Component {




    render() { console.log(this.props.interest, " interestsssss")
        return (
  <>
  
      
        <ul>
        <li>
          {this.props.interest ? <h3 className='date'>{this.props.interest.activities}</h3> : null}
          
        </li>
        </ul>
      
            
  
  </>
        )}
    
}
export default ActivitiesCard