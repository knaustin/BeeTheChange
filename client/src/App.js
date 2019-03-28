import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Farmer from "./pages/User";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route exact path="/farmer/:id" component={Farmer} />
          <Route exact path="/search" component={Search} />
          {/* TODO: Update Settings To Not Require User Id Param After Authentication Is Implemented */}
          <Route exact path="/settings/:id" component={Settings} />
          <Route exact path="/developers" component={Devpage} />
          {/* <Route exact path="/farmersearch" component={Farmersearch} /> */}
        </Switch> 
      {/* </div> */}
    </Router>
  );
}

export default App;