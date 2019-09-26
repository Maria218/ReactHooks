import React from "react";
import "./Navbar.css";
import logo5 from "./../../public/logo5.gif";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <img src={logo5} alt="Girls' Voices" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-3">
                            <NavLink exact to="/" activeClassName="selected" className="nav-link">welcome</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink to="/about" activeClassName="selected" className="nav-link">about</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink to="/members" activeClassName="selected" className="nav-link">members</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink to="/contact" activeClassName="selected" className="nav-link">get in touch</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}