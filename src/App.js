import React, { Component } from 'react';
import './App.scss';
import Store from './component/Store';
// import  from './component/Top'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
      </main>
    );
  }
}

export default App;
