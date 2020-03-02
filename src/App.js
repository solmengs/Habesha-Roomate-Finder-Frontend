import React from 'react';
import './App.css';
import NavBar from './NavBar'
import HomepageLayout from './HomepageLayout'
import SignupForm from './SignupForm'
import { api } from './services/api'
import LoginForm from './LoginForm'
import TenantContanier from './contanier/TenantContanier'
import Logout from './components/Logout'
import InterestForm from './InterestForm'


import UserProfile from './contanier/UserProfile'

import { BrowserRouter as Router, Route } from "react-router-dom"

const userURL = "http://localhost:3000/users"
const interestURL = "http://localhost:3000/interests"
const userInterestURL = "http://localhost:3000/user_interests"
const LanguagesURL = "http://localhost:3000/languages"



// import SignupForm from './SignupForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: {
        user: {
          name: "",
          age:"",
          img:"",
          id:null,
          interests:[],
          languages:[],
        },
        newSignup: false
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
      const updatedState = { ...this.state.auth, user: loginResponse.user };
      localStorage.setItem("token", loginResponse.jwt);
      this.setState({ auth: updatedState });

    })

  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };




  addUser = user => {
    this.setState(prevState => {
      return {
        auth: { ...prevState.auth.user, user },
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
      body: JSON.stringify({ user: user })
    }).then(res => res.json())
      .then(data => console.log(data))
  }


  AddInterest = (interest) => {
    this.setState(prevState => {
      console.log("checking")
      return {
        auth: {
          user: { ...prevState.auth.user, interests: [...prevState.auth.user.interests, interest] }
        }
      }
    }, () => this.PostInterest(interest)
      .then(data => this.PostUserInterest(this.state.auth.user.id, data.id))
      .then(console.log, "add interest APp")
    )
  }

  PostInterest = (interest) => {
    console.log("before posting: ", interest)
    return fetch(interestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({interest: interest})
    }).then(res => res.json())
  }

  PostUserInterest = (userId, interestId) => {
    return fetch(userInterestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({user_interest: {user_id: userId, interest_id: interestId}})
    }).then(res => res.json())
  }

  getTenants = () => {
    fetch(userURL)
      .then(res => res.json())
      .then(tenants => this.setState({
        tenants: tenants

      }))


  }
  
  

  //   userProfile=()=>{
  //   fetch(userURL)
  //   .then(res => res.json())
  //   .then(tenants => this.setState({
  //     currentUser: tenants.filter(tenant => tenant.id === this.state.auth.user.id)
  //   }))
  // }
  editUser = (user) => {
    this.setState(prevState => {
      return {
        auth: { ...prevState.auth.user, user }

      }
    }, () => this.patchUser(user))
  }


  patchUser = (user) => {
    console.log("Path User");
    fetch(userURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => console.log(data), "editting")
  }

  render() {

    console.log(this.state)

    return (

      <div>
       
        
        <Router>
          <NavBar userView={this.state.auth.user} />

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
                  user={this.state.auth.user}
                />}
            />}

          {<Route
            path="/signup"
            exact
            render={() =>
              <SignupForm
                addUser={this.addUser}
                newSignup={this.state.newSignup}
              />}
          />}

          {<Route
            path="/tenants"
            exact
            render={(props) =>
              <TenantContanier
                {...props}
                tenants={this.state.tenants}
              />}
          />}

          {<Route
            path="/profile"
            exact
            render={(props) => <UserProfile {...props}
              userProfile={this.state.auth.user} editUser={this.editUser}
              AddInt={this.state.auth.user} AddInterest={this.AddInterest}/>}
          />}




          {<Route
            path="/logout"
            exact
            render={(props) => <Logout {...props} onLogout={this.logout} />}
          />}



        </Router>



        </div>

    )
  }
}

export default App;
