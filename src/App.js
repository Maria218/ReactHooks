import React from "react";
import './App.css';
import Navbar from "./main/navbar/Navbar";
import Home from "./main/home/Home";
import About from "./main/about/About";
import Members from "./main/members/Members";
import Contact from "./main/contact/Contact";

export default function App() {
  return (
    <div class="App">
      <Navbar />
      <Home
        title="Home"
        dark={true}
        name="section1"
      />
      <About
        title="About"
        name="section2"
      />
      <Members
        title="Members"
        id="section3"
        name="section3"
      />
      <Contact
        title="Contact"
        name="section4"
      />
    </div>
  )
}