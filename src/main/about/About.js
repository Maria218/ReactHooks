import React from "react";
import "./About.css";
import about from "./../../public/about.jpg"

export default function About() {
    return (
        <div className="about" style={{backgroundImage: `url(${about})`}}>
            <div className="body" style={{backgroundColor: `rgb(0, 0, 0, 0.6)`}}>
                <h1>About Us</h1>
            </div>
        </div>
    )
}