import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Farmer from "./pages/User";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Devpage from './pages/Devpage';
import Main from "./pages/Main";
import history from './history';

class App extends Component {
  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route path="/" exact={true} render={() => <Main auth={this.props.auth} />} />
          <Route exact path="/farmer/:id" component={Farmer} />
          <Route exact path="/search" component={Search} />
          {/* TODO: Update Settings To Not Require User Id Param After Authentication Is Implemented */}
          <Route exact path="/settings/:id" component={Settings} />
          <Route exact path="/developers" component={Devpage} />
          <Route exact path="/auth-callback" component={() => {
            this.props.auth.handleAuthentication();
            return <div>Authenticating...</div>;
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
