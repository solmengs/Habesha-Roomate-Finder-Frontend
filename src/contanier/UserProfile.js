import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { api } from '../services/api';
import UserCard from '../components/UserCard'

class UserProfile extends Component {


    componentDidMount() {
        api.auth.getCurrentUser().then(user => {
            if (user.error) {
                this.props.history.push("/login")
            }
        })
    }
    userProffile = () => {
        if (this.props.userProfile.id) {
            return <UserCard userProfile={this.props.userProfile} deletetenants={this.props.deletetenants} editUser={this.props.editUser}  AddInterest={this.props.AddInterest} AddInt={this.props.AddInt}/>
        }
    }


    render() {
        return (
            <>
            <Segment.Group>
                {this.userProffile()}
            </Segment.Group>
            </>

        )
    }
}
export default UserProfile 