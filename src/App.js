import React from "react";
import PracticeStates from "./practice-folder/PracticeStates"
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Here is my imported component:</h1>
      {PracticeStates()}
    </div>
  )
}