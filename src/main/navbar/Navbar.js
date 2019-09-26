import React from "react";
import "./Navbar.css";
import logo5 from "./../../public/logo5.gif";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg">
                <img src={logo5} alt="Girls' Voices" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-3">
                            <NavLink exact to="/" activeClassName="selected" className="nav-link">welcome</NavLink>
                        </li>
                        <li class="nav-item px-3">
                            <NavLink to="/about" activeClassName="selected" className="nav-link">about</NavLink>
                        </li>
                        <li class="nav-item px-3">
                            <NavLink to="/members" activeClassName="selected" className="nav-link">members</NavLink>
                        </li>
                        <li class="nav-item px-3">
                            <NavLink to="/contact" activeClassName="selected" className="nav-link">get in touch</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}