import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  

  render() { console.log(this.props)
    const loggedIn = this.props.userView.id
    const { activeItem } = this.state

    return (
      <Menu>
         <Menu.Item>
          <img src='data:image/jpeg;base64,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' />
        </Menu.Item>
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

        { loggedIn ?( <Menu.Item
          
          name={`Hi ${this.props.userView.name}`}
          // ${this.props.userView.img}
          active={activeItem === 'login'}
          onClick={this.handleItemClick} />) : null}

        { !loggedIn ?(<Menu.Item
          as={NavLink} to="/signup"
          name ='sign up'
          
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


