import React, { useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

const client = new w3cwebsocket('ws://127.0.0.1:8000')

const App = () => {

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
