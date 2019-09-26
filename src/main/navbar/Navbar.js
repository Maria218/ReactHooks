import React from "react";
import "./Navbar.css";
import logo5 from "./../../public/logo5.gif";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <img src={logo5} alt="Girls' Voices" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-3">
                            <Link to="/" class="nav-link">welcome</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link to="/about" class="nav-link">about</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link to="/members" class="nav-link">members</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link to="/contact" class="nav-link">get in touch</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}