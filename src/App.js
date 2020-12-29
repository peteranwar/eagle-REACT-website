import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';
import Signin from './pages/Signin/Signin';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
