import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <GetStarted />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
