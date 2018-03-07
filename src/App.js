import React, { Component } from 'react';
import './App.css';
import HeaderIndex from './components/HeaderIndex.jsx';
import Sidebar from './components/Sidebar.jsx';
import List from './components/List.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderIndex />
        <Sidebar />
      </div>
    )
  }
}

App.defaultProps= {
  active: ''
}

export default App;
