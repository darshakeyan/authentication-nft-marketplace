import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./pages/SignupScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
