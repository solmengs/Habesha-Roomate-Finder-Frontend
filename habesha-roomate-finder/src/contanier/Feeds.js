import React from 'react'
import FeedCard from '../components/FeedCard'
import {api} from '../services/api';


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
        return this.props.tenants.map(tenants => {
            return <FeedCard tenants={tenants} deletetenants={this.props.deletetenants}/>
          }
            )}
         
    

    render(){ 

        return(
            <div>
            {this.everyTenants()}
            </div>
        )
    }
}
export default MyProfile