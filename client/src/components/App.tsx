import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import PusherTest from "./PusherTest";

const App = () => {

  return <>
    <h1>Greatest Quiz</h1>

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
