import React from "react";
import './App.css';
import Navbar from "./main/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./routing/Container";

export default function App() {
  return (
    <div class="App">
      <Router>
        <div>
          <Navbar />
          <Container />
        </div>
      </Router>
      
    </div>
  )
}