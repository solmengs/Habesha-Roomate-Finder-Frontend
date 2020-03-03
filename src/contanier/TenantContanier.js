import React from 'react'
import TenantCard from '../components/TenantCard'
import {api} from '../services/api';
import SearchForm from '../components/SearchForm'
import { Card, Icon, Image, Button, Grid, Header, Dropdown, Search, Segment} from 'semantic-ui-react'


class MyProfile extends React.Component{
    state = {
        filter: ""
    }


    componentDidMount() {
        api.auth.getCurrentUser().then(user => {
            if (user.error) {
                this.props.history.push("/login")
            }
        })}

    everyUser = () => { 
      
        // return this.props.getCurrentUser.map(user => {
        //   return <UserCard user={user} deleteuser={this.props.deleteuser}/>
        // }
        // )
      }

      setFilter = value =>
        this.setState({filter: value})

      
      everyTenants=()=>{
        if (this.props.tenants.length > 0){
            let filteredTenants = this.props.tenants.filter(tenant => tenant.name.includes(this.state.filter) )
        return filteredTenants.map(tenants => {
            return <TenantCard tenants={tenants} deletetenants={this.props.deletetenants}/>
          }
            )}
        }
         
    

    render(){ 

        return(
        < >
        <Grid>
          
         
            <SearchForm  tenants={this.props.tenants} onSetFilter={this.setFilter} filter={this.state.filter}/>  
           
            <Card.Group className="tenant-card-container">  
            {this.everyTenants()}
            </Card.Group>  
            </Grid>
        </>    
   
              

        )

    }
}
export default MyProfile