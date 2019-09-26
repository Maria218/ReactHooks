import React from "react";
import "./About.css";
import about from "./../../public/about.jpg"

export default function About() {
    return (
        <div id="about">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active box">
                        <img src={about} class="d-block w-100" alt="This is the main image" />
                        <div class="text">
                            {/* <h1>Flying Kites</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}