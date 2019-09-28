import React from "react";
import "./Home.css";
import desktopImage from "./../../public/main_image.jpg";
import mobileImage from "./../../public/main_image2.jpg";

export default function Home() {
    const homeImage = window.innerWidth >= 650 ? desktopImage : mobileImage
    return (
        <div className="home" style={{backgroundImage: `url(${homeImage})`}}>
            <div className="body">
                <br />
                <br />
                <br />
                <div className="text">
                    <h1 dir="rtl">Girls' voices is an organization that seeks to ensure every girl's voice is heard</h1>
                    <ul className="right-text" dir="rtl">
                        <li className="fade1">Counselling and educating parents on protecting their girls</li>
                        <li className="fade2">Raising the fist of power for women empowerment</li>
                        <li className="fade3">Helping sexually abused girls find healing</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}