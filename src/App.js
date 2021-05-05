import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Home from "./components/home/Home";
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path={("/login", "/register")}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
