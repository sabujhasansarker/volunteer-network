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
import { getEvent } from "./action/event";
import { getVolunteer } from "./action/volunteer";
import PrivateRoute from "./Components/layouts/PrivateRoute";
import NotFound from "./Components/pages/NotFound";

const App = ({ getUser, user, getEvent, getVolunteer }) => {
   useEffect(() => {
      getUser();
      getEvent();
      getVolunteer();
   }, []);

   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/registration/:id" component={Register} />
            {user && user.email === "sabujhasansarker@gmail.com" && (
               <Fragment>
                  <PrivateRoute exact path="/admin" component={Admin} />
                  <PrivateRoute exact path="/add-event" component={AddEvent} />
               </Fragment>
            )}
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
};

const mapstatetoprops = (state) => ({
   user: state.auth.user,
});

export default connect(mapstatetoprops, { getUser, getEvent, getVolunteer })(
   App
);
