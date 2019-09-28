import React from "react";
import "./Home.css";
import desktopImage from "./../../public/main_image.jpg";
import mobileImage from "./../../public/main_image2.jpg";

export default function Home() {
    const homeImage = window.innerWidth >= 650 ? desktopImage : mobileImage
    return (
        <div className="home" style={{backgroundImage: `url(${homeImage})`}}>
            <div className="body"  style={{backgroundColor: `rgb(0, 0, 0, 0.6)`}}>
                <br />
                <br />
                <br />
                <div className="text">
                    <h1 dir="rtl">Girls' voices is an organization that seeks to ensure every girl's voice is heard</h1>
                    <h1 dir="rtl">Counselling and educating parents on protecting their girls</h1>
                    <h1 dir="rtl">Raising the fist of power for women empowerment</h1>
                    <h1 dir="rtl">Helping sexually abused girls find healing</h1>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}