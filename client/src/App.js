import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import './App.scss';
import Auth from './Auth/Auth';
import Devpage from './pages/Devpage';
import Farmer from "./pages/User";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import User from "./pages/User";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    // const { isAuthenticated } = this.props.auth;
    // <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>Home</Button>
    // {!isAuthenticated() && (<Button bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}>Log In</Button>)}
    // {isAuthenticated() && (<Button bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}>Log Out</Button>)}
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route exact path="/farmer/:id" component={Farmer} />
          <Route exact path="/search" component={Search} />
          {/* TODO: Update Settings To Not Require User Id Param After Authentication Is Implemented */}
          <Route exact path="/settings/:id" component={Settings} />
          <Route exact path="/developers" component={Devpage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
