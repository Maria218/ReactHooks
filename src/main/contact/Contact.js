import React from "react";
import contact from "./../../public/talking.jpg";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact box">
            <div className="body">
                <br />
                <br />
                <br />
                {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active box">
                            <img src={contact} class="d-block w-100" alt="Girls' Voices" />
                            <div class="text fade-in">
                            </div>
                        </div>
                    </div>
                </div> */}
                <h1 className="header-text">Get In Touch With Us</h1>
                <image src={contact} alt="" />
                <br />
                <br />
                <div className="jumbotron">
                    <h1 className="display-4">Contact Girls' Voices!</h1>
                    <p className="lead">Get in touch with us on these platforms:</p>
                    <hr className="my-4" />
                    <IconContext.Provider className="" value={{ color: "#4267b2", className: "global-class-name", size: "7em" }}>
                        <div>
                            <p>Message us on facebook:</p>
                            <FaFacebook />
                        </div>
                    </IconContext.Provider>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}