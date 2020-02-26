import React, { Component } from 'react'
import { Card, Icon, Image, Button} from 'semantic-ui-react'


 class TenantsCard extends Component {


    
    
      handleDeleteButton = () => {
        this.props.deletetenants(this.props.tenants)
      }
    
      render() {console.log(this.props)
        return(
            <div class="ui link cards">

<Card.Group Row width={3}>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='huge'
          Image src={this.props.tenants.img} 
          />
        <Card.Header>Name:  {this.props.tenants.name}</Card.Header>
        <Card.Meta>{this.props.tenants.interest}</Card.Meta>
        <Card.Description>
          Age: <strong>{this.props.tenants.age}</strong>
        </Card.Description>
      </Card.Content>
      </Card>
      </Card.Group>
              
         
               
            
    
              
            {/* <button className="ui button" onClick={this.handleDeleteButton}>Delete tenants</button> */}
           
          
            
          </div>
          )
        }
    }
    
    
    

    
export default TenantsCard