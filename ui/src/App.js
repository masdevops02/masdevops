
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
          DevOps
        </p>
        <p>
          <button
            onClick={evt => {
              CallService().then(d => alert(JSON.stringify(d.data)));
            }}
          >Call web api</button>
        </p>
      </div>
    );
  }
}

export default App;
