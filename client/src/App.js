import  React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Farmer from "./pages/User";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Devpage from './pages/Devpage';
import Main from "./pages/Main";
import User from './pages/User';



// import Farmsearch from ".pages/Farmsearch"


class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/home" component={Main} />
          <Route exact path="/farmer/:id" component={Farmer} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/user" component={User} />
          {/* TODO: Update Settings To Not Require User Id Param After Authentication Is Implemented */}
          <Route exact path="/settings/:id" component={Settings} />
          <Route exact path="/developers" component={Devpage} />
          {/* <Route exact path="/farmersearch" component={Farmsearch} /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
