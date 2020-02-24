import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class UserCard extends Component {
    render() {console.log(this.props)
        return (
            <div>
                 <div class="ui link cards">
          <Card>
            
            <Image src={this.props.userProfile.img} wrapped ui={false} />
            <Card.Content>
    <Card.Header>{this.props.userProfile.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.userProfile.interest}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.userProfile.age}
              </Card.Description>
            </Card.Content>
            <button className="ui button">Edit userProfile</button>
            <button className="ui button" onClick={this.handleDeleteButton}>Delete tenants</button>
            
          </Card>
          </div>
          )
        
            </div>
        )}
    
}
export default UserCard 