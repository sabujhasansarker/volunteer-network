import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Events from "./Components/pages/Events";
import Home from "./Components/pages/Home";
import Admin from "./Components/pages/Admin";
import AddEvent from "./Components/pages/AddEvent";

import { getUser } from "./action/auth";
import PrivetRoute from "./Components/layouts/PrivetRoute";
import NotFound from "./Components/pages/NotFound";

const App = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivetRoute exact path="/events" component={Events} />
        {user && user.email === "sabujhasansarker@gmail.com" && (
          <Fragment>
            <PrivetRoute exact path="/admin" component={Admin} />
            <PrivetRoute exact path="/add-event" component={AddEvent} />
          </Fragment>
        )}
        <PrivetRoute exact path="/registration" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapstatetoprops = (state) => ({
  user: state.auth.user,
});

export default connect(mapstatetoprops, { getUser })(App);
