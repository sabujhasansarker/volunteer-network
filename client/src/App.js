import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Login from "./Components/pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/pages/Register";
import Navbar from "./Components/layouts/Navbar";
import Events from "./Components/pages/Events";
import Home from "./Components/pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <div className="pt-100">
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Register} />
            <Route exact path="/events" component={Events} />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
