import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Farmer from "./pages/User";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
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
    const { isAuthenticated } = this.props.auth;

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
