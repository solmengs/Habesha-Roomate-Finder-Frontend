import React, { Component } from 'react'

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
        return <UserCard userProfile={this.props.userProfile} deletetenants={this.props.deletetenants} />


    }


    render() {
        return (
            <>
                {this.userProffile()}
            </>

        )
    }
}
export default UserProfile 