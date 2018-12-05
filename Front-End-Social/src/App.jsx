import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Layouts/Header";
import ProfilePage from "./components/Page/User/ProfilePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" component={ProfilePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
