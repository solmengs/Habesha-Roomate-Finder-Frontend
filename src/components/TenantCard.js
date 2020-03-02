import React, { Component } from 'react'
import { Card, Icon, Image, Button, Grid, Dropdown} from 'semantic-ui-react'


 class TenantCard extends Component {


    
    
      handleDeleteButton = () => {
        this.props.deletetenants(this.props.tenants)
      }
    
      render() {console.log(this.props, "filtering...")
        return(
            
         

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
      

 

              
         
               
            
    
              
            
          
            
          
        )
        }
    }
    
    
    

    
export default TenantCard