import React from 'react';
import './App.css';
import NavBar from './NavBar'
import HomepageLayout from './HomepageLayout'
import SignupForm from './SignupForm'
import { api } from './services/api'
import LoginForm from './LoginForm'
import Feeds from './contanier/Feeds'
import Logout from './components/Logout'

import UserProfile from './contanier/UserProfile'

import { BrowserRouter as Router, Route } from "react-router-dom"

const userURL = "http://localhost:3000/users"
const interestURL = "http://localhost:3000/interests"
const LanguagesURL = "http://localhost:3000/languages"



// import SignupForm from './SignupForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: {
        user: {},
        newSignup: false,
        newLogin: false
      },
      tenants: []
    }
  }
    componentDidMount() {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("there is a token")
        api.auth.getCurrentUser().then(user => {
          console.log(user)
          const updatedState = { ...this.state.auth, user: user.user };
          this.setState({ auth: updatedState });
        });
      }
      this.getTenants()
      // this.userProfile()
    }
  
    login = data => {
      api.auth.login(data).then(loginResponse => {
        const updatedState = { ...this.state.auth, user: loginResponse.user};
        localStorage.setItem("token", loginResponse.jwt);
        this.setState({ auth: updatedState, 
          newLogin: true});
        
      })
      
    };
  
    logout = () => {
      localStorage.removeItem("token");
      this.setState({ auth: { user: {} } });
    };




    addUser = user=> {
      this.setState(prevState => {
        return {
          auth: {...prevState.auth.users, user},
          newSignup: true,
          
        }
      }, () => this.postUser(user))
    }
    postUser = (user) => {
      fetch(userURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({user: user})
      }).then(res => res.json())
        .then(data => console.log(data))
    }

    getTenants=()=>{
      fetch(userURL)
      .then(res => res.json())
      .then(tenants => this.setState({
        tenants:tenants
        
      }))
      
      
    }

  //   userProfile=()=>{
  //   fetch(userURL)
  //   .then(res => res.json())
  //   .then(tenants => this.setState({
  //     currentUser: tenants.filter(tenant => tenant.id === this.state.auth.user.id)
  //   }))
  // }
    render(){

    


  return (
    <div>
       <Router>
          <NavBar />

          <Route
            path="/"
            exact
            render={() => <HomepageLayout />}
          />
{ 
          <Route
            path="/login"
            exact
             render={() =>
             <LoginForm
               login={this.login}
               newLogin={this.state.newLogin}
            />}
          /> }

          { <Route
            path="/signup"
            exact
             render={() =>
             <SignupForm
              addUser={this.addUser}
              newSignup={this.state.newSignup}
               />}
          /> }

          { <Route
            path="/feeds"
            exact
            render={(props) =>
              <Feeds
              {...props}
              tenants={this.state.tenants}
              />}
          />}

          { <Route 
          path="/profile"
          exact
          render={(props) => <UserProfile {...props}
          userProfile={this.state.auth.user}/>}
          />}
         

        

        { <Route 
          path="/logout"
          exact
          render={() => <Logout Logout={this.logout}/>}
          />}
          
         

        </Router>
      
          
        
        
      
    </div>
  );}
}

export default App;
