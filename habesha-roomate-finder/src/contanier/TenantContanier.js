import React from 'react'
import TenantCard from '../components/TenantCard'
import {api} from '../services/api';
import { Card, Icon, Image, Button, Grid, Header} from 'semantic-ui-react'


class MyProfile extends React.Component{


    componentDidMount() {
        api.auth.getCurrentUser().then(user => {
            if (user.error) {
                this.props.history.push("/login")
            }
        })}

    everyUser = () => { console.log(this.props.getCurrentUser(), "props")
      
        // return this.props.getCurrentUser.map(user => {
        //   return <UserCard user={user} deleteuser={this.props.deleteuser}/>
        // }
        // )
      }

      
      everyTenants=()=>{
        if (this.props.tenants){
        return this.props.tenants.map(tenants => {
            return <TenantCard tenants={tenants} deletetenants={this.props.deletetenants}/>
          }
            )}
        }
         
    

    render(){ 

        return(
        < >
           
            <Card.Group className="tenant-card-container">  
            {this.everyTenants()}
            </Card.Group>    
            
        </>    
   
              

        )

    }
}
export default MyProfile