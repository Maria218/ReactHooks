import React from "react";
import "./Home.css";
import main_image from "./../../public/main_image.jpg";
import logo1 from "./../../public/logo1_edited.gif"

export default function Home() {
    return (
        <div id="home" class="fade-in">
            <br />
            <br />
            <br />
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active box">
                        <img src={main_image} class="d-block w-100" alt="This is the main image" />
                        <div class="text">
                            {/* <h1>Flying Kites</h1> */}
                        </div>
                    </div>
                    {/* <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div> */}
                </div>
            </div>
        </div>
    )
}