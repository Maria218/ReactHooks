import React from "react";
import { FaUserAlt } from 'react-icons/fa';
import "./Members.css";
import { IconContext } from "react-icons";

export default function Members() {
    return (
        <div className="container">
            <div className="profiles">
                <br />
                <br />
                <br />
                <h1>Meet Our Members</h1>
                <br />
                <br />
                <div className="card-deck">
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "blue", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        {/* <img className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="card-text">Secretary</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "green", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Person 2</h5>
                            <p className="card-text">CEO</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "red", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Person 3</h5>
                            <p className="card-text">Tech Advisor</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "yellow", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Person 4</h5>
                            <p className="card-text">The Help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}