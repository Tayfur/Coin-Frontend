import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages';
import Signin from './pages/signin';
import Service from './pages/service'
function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/services" component={Service} exact />

      </Switch>
    </Router>
  );
}

export default App;
