import React from "react";
import { ScrollTo, ScrollArea } from "react-scroll-to";
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
      <Home />
      <About />
      <Members />
      <Contact />
    </div>
  )
}