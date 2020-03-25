import React, { Component } from 'react'
import Footer from './components/Footer'
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Routes />
        <Footer />
      </div>
      
    );
  }
}

export default App;