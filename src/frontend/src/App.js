import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MatchPage } from "./Components/MatchPage";
import { TeamPage } from "./Components/TeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/team/:teamName" component={TeamPage} />
          <Route
            exact
            path="/team/:teamName/matches/:year"
            component={MatchPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
