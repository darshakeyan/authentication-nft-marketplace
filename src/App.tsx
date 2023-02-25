import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from "./components/LoginScreen";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
