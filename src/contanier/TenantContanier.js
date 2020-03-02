import React from 'react'
import TenantCard from '../components/TenantCard'
import {api} from '../services/api';
import SearchForm from '../components/SearchForm'
import { Card, Icon, Image, Button, Grid, Header, Dropdown, Search, Segment} from 'semantic-ui-react'


class MyProfile extends React.Component{


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
        <Grid>
          
         <Dropdown
          text='Filter'
          icon='filter'
          floating
          labeled
          button
          className='icon'
        >
          <Dropdown.Menu>
            <Dropdown.Header icon='tags' content='Filter by tag' />
            <Dropdown.Divider />
            <Dropdown.Item icon='attention' text='Important' />
            <Dropdown.Item icon='comment' text='Announcement' />
            <Dropdown.Item icon='conversation' text='Discussion' />
          </Dropdown.Menu>
        </Dropdown>
            <SearchForm  tenants={this.props.tenants}/>  
           
            <Card.Group className="tenant-card-container">  
            {this.everyTenants()}
            </Card.Group>  
            </Grid>
        </>    
   
              

        )

    }
}
export default MyProfile