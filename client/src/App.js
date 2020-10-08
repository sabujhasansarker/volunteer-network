import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Login from "./Components/pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/pages/Register";
import Events from "./Components/pages/Events";
import Home from "./Components/pages/Home";
import Admin from "./Components/pages/Admin";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Register} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
