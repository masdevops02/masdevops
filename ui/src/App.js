
import React, { Component } from 'react';
import './App.css';
import azure from "./azure.png";
import {CallService} from "./modules/common/http";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={azure} className="App-logo" alt="logo" />
          <h2>Azure in a Day</h2>
        </div>
        <p className="App-intro">
          Bienvenidos
        </p>
        <p>
          <button
            onClick={evt => {
              CallService().then(d => alert(JSON.stringify(d.data)));
            }}
          >Realizar una Llamada al Servidor</button>
        </p>
      </div>
    );
  }
}

export default App;
