import React from "react";
import contact from "./../../public/talking.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact box">
            <div className="body">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="header-text">Get In Touch With Us</h1>
                <image src={contact} alt="" />
                <br />
                <br />
                <div className="jumbotron social">
                    <h1 className="display-4">Contact Girls' Voices!</h1>
                    <p className="lead">Get in touch with us on these platforms:</p>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-4">
                            <IconContext.Provider className="" value={{ color: "#4267b2", className: "global-class-name", size: "7em" }}>
                                <div>
                                    <p>Message us on facebook:</p>
                                    <FaFacebook />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="col-4">
                            <IconContext.Provider className="" value={{ color: "brown", className: "global-class-name", size: "7em" }}>
                                <div>
                                    <p>Email Us:</p>
                                    <FaEnvelope />
                                    <p>girlsvoices@gmail.com</p>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="col-4">
                            <IconContext.Provider className="" value={{ color: "green", className: "global-class-name", size: "7em" }}>
                                <div>
                                    <p>Call Us:</p>
                                    <FaPhone />
                                    <p>+260 978 006 736</p>
                                    <p>+260 977 764 300</p>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
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