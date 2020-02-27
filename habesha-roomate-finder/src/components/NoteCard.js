import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid, Segment, Header,Divider } from 'semantic-ui-react'



class NoteCard extends Component {




    render() { console.log(this.props.interest, " interestsssss")
        return (
  <>
  
      
      
     <ul>
        <li>
       {this.props.interest ? <h4 className='date'>{this.props.interest.note}</h4> : null}
       </li>
       </ul>
            
  
  </>
        )}
    
}
export default NoteCard