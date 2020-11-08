import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";

const App = () => {

  return <h1>
    App
    <Router>
      <Switch>
        <Route path="/join" component={JoinGame} />
        <Route path="/create" component={CreateGame} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  </h1>

}

export default App;
