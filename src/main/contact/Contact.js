import React from "react";
import contact from "./../../public/talking.jpg";
import contact2 from "./../../public/contact2.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Contact.css";

export default function Contact() {
    const contactImg = window.innerWidth >= 650 ? contact : contact2;
    return (
        <div className="contact" style={{ backgroundImage: `url(${contactImg})`}}>
            <div className="body" style={{backgroundColor: `rgb(0, 0, 0, 0.6)`}}>
                <br />
                <br />
                <br />
                <div className="container table">
                    <div class="jumbotron jumbotron-fluid social">
                        <div class="container">
                            <h1>Get In Touch With Us!</h1>
                            <br />
                            <div className="row">
                                <div className="col-4">
                                    <IconContext.Provider className="" value={{ color: "#4267b2", className: "global-class-name", size: "3em" }}>
                                        <div>
                                            <p>Find us on facebook:</p>
                                            <FaFacebook />
                                            <p>GirlsVoicesPage</p>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <div className="col-4">
                                    <IconContext.Provider className="" value={{ color: "brown", className: "global-class-name", size: "3em" }}>
                                        <div>
                                            <p>Email Us:</p>
                                            <FaEnvelope />
                                            <p>girlsvoices@gmail.com</p>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <div className="col-4">
                                    <IconContext.Provider className="" value={{ color: "green", className: "global-class-name", size: "3em" }}>
                                        <div>
                                            <p>Call Us:</p>
                                            <FaPhone />
                                            <p>+260 978 006 736</p>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h1 className="header-text">Get In Touch With Us</h1>
                <br />
                <br /> */}
                {/* <div className="jumbotron social">
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
                </div> */}
            </div>
        </div>
    )
}