import React from "react";
import { FaUserCircle } from 'react-icons/fa';
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
                            <h5 className="card-title">Card title that wraps to a new line</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "blue", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Card title that wraps to a new line</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "blue", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Card title that wraps to a new line</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <IconContext.Provider className="card-img-top" value={{ color: "blue", className: "global-class-name", size: "10em" }}>
                            <div>
                                <FaUserAlt />
                            </div>
                        </IconContext.Provider>
                        <div className="card-body">
                            <h5 className="card-title">Card title that wraps to a new line</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}