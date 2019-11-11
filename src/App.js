import React, { Component } from 'react';
// import LoginSignUp from './components/LoginSignUp'
import Profile from './components/Profile'
import './App.css';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container" >
          <Profile />
        </div>
      </div>
    )
  }
}

export default App;
