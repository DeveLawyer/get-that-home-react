import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import SignUpFlow from './components/signup/SignUpFlow'
import Login from './components/login/Login'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup">
          <SignUpFlow />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
