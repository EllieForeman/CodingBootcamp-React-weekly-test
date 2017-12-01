import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import HideMe from './HideMe';






class App extends Component {
  render() {
    return (
    	<div>
      <h3 className="page-header">End of week test </h3>

      <h5 className="page-header">Create a component Multiplier 'x={ 5 } y={ 7 }' that takes two props, x and y, and outputs their product (i.e. x × y) in a p. </h5>
      <Multiplier x={ 5 } y={ 7 }/>

      <h5 className="page-header">Create a component 'EvenClicks' that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.</h5>
      <EvenClicks />

      <h5 className="page-header">Create a component 'CountBy step={ 5 }' that takes a step prop. It should display a number (starting at 0) inside a p. Every time it is clicked the number should go up by step.</h5>
      <CountBy step={ 5 } />

      </div>
    );
  }
}

export default App;
