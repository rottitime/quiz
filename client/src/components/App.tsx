import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import PusherTest from "./PusherTest";

const App = () => {

  return <>
    <h1>App</h1>

    <PusherTest />
    <Router>
      <Switch>
        <Route path="/join" component={JoinGame} />
        <Route path="/create" component={CreateGame} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  </>

}

export default App;
