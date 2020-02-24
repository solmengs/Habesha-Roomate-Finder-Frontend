import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


 class TenantsCard extends Component {


    
    
      handleDeleteButton = () => {
        this.props.deletetenants(this.props.tenants)
      }
    
      render() {
        return(
            <div class="ui link cards">
          <Card>
            
            <Image src={this.props.tenants.img} wrapped ui={false} />
            <Card.Content>
    <Card.Header>{this.props.tenants.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.tenants.interest}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.tenants.age}
              </Card.Description>
            </Card.Content>
            <button className="ui button">Edit tenants</button>
            <button className="ui button" onClick={this.handleDeleteButton}>Delete tenants</button>
            
          </Card>
          </div>
          )
        }
    }
    
    
    

    
export default TenantsCard