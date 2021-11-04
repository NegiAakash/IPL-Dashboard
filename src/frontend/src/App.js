import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { MatchPage } from "./Components/MatchPage";
import { TeamPage } from "./Components/TeamPage";
import Teams from "./Components/Teams";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Teams} />
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
