import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
