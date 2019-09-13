// Hooks has no need for classes, and states can now be internally managed without using 'setState'
// There is no need to import 'Component' as the React component is no longer an ES6 class, but a pure JavaScript function
// Importing 'useState' shows that we intend to use and manage states in this component

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  // With Hooks, we no longer need the constructor to add states
  // States are created using the destructuring method. The argument passed inside "useState" is the state's initial value, or it is the data that is meant to be changed. The second value in the array is the state updater

  const [ initialButtonText, setButtonText ] = useState("Click me, please!")

  // There is no more use for the render function, but the return function stays the same
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* The state is updated as below */}
        <button onClick={() => setButtonText("Thank you for clicking me!")}>{initialButtonText}</button>
      </header>
    </div>
  )
}
