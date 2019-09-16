import React from "react";
import "./Navbar.css";
import logo3 from "./../../public/logo3.gif";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <img src={logo3} alt="Our brand logo" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">about</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">get in touch</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}