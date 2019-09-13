// Hooks has no need for classes, and states can now be internally managed without using 'setState'
// There is no need to import 'Component' as the React component is no longer an ES6 class, but a pure JavaScript function
// Importing 'useState' shows that we intend to use and manage states in this component

import React, { useState } from 'react';
import logo from './../logo.svg';
import './../App.css';

// ALWAYS start your components with a capital letter. The names are case sensitive because a linter is used in Hooks
export default function PracticeStates() {
  // With Hooks, we no longer need the constructor to add states
  // States are created using the destructuring method. The argument passed inside "useState" is the state's initial value, or it is the data that is meant to be changed. The second value in the array is the state updater

  const [ initialButtonText, setButtonText ] = useState("Click me, please!")

  // You can continue to update states in functions like always
  function handleClick() {
    return setButtonText("Thank you for clicking me!")
  }

  // There is no more use for the render function, but the return function stays the same
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* The state is updated as below: */}
        {/* <button onClick={() => setButtonText("Thank you for clicking me!")}>{initialButtonText}</button> */}

        {/* Using a function to update state */}
        <button onClick={handleClick}>{initialButtonText}</button>
      </header>
    </div>
  )
}
