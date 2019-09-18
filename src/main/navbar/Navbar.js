import React from "react";
import "./Navbar.css";
import logo5 from "./../../public/logo5.gif";

export default function Navbar() {

    function scrollToTop() {
        scroll.scrollToTop();
    }

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <img src={logo5} onClick={scrollToTop} alt="Girls' Voices" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">welcome</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">about</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">members</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">get in touch</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}