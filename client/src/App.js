import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Events from "./Components/pages/Events";
import Home from "./Components/pages/Home";
import Admin from "./Components/pages/Admin";
import AddEvent from "./Components/pages/AddEvent";

import { getUser } from "./action/auth";

const App = ({ getUser }) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add-event" component={AddEvent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Register} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </Router>
  );
};

export default connect(null, { getUser })(App);
