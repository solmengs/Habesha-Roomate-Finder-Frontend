import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  

  render() {
    const loggedIn = this.props.userView.id
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        {loggedIn ?( <Menu.Item
          as={NavLink} to="/profile"
          name='my profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />): null}

        { loggedIn ?(<Menu.Item
          as={NavLink} to="/tenants"
          name='Tenants'
          active={activeItem === 'tenants'}
          onClick={this.handleItemClick}
        />): null}
        <Menu.Menu position='right'>
          
        { !loggedIn ?( <Menu.Item
          as={NavLink} to="/login"
          name='login'
            
          active={activeItem === 'login'}
          onClick={this.handleItemClick} />) : null}

        { !loggedIn ?(<Menu.Item
          as={NavLink} to="/signup"
          name='sign up'
          active={activeItem === 'sign up'}
          onClick={this.handleItemClick}
        />): null}
        
        { loggedIn ?(<Menu.Item
          as={NavLink} to="/logout"
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        />): null}

        </Menu.Menu>
      </Menu>
    )
  }
}


