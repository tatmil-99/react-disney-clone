import './App.css';
import { BrowserRouter as Router, Switch, Route,  Redirect} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
