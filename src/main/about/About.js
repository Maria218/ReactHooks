import React from "react";
import "./About.css";
import about from "./../../public/about.jpg"

export default function About() {
    return (
        <div className="about" style={{backgroundImage: `url(${about})`}}>
            <div className="body" style={{backgroundColor: `rgb(0, 0, 0, 0.6)`}}>
            <br />
            <br />
            <br />
                <div className="col-6 table">
                    <h1 className="head">About Us</h1>
                    <br />
                    <p className="story">Girls' Voices is an organisation that was set up in 2019 meant to as a passion project by two 'sisters' in 2019. A facebook group that dealt with encouraging and uplifting people was already at work but this only became an organisation aiming to help young girls in 2019.</p>
                    <p className="story">This is some more filler content. The font needs to be in a cursive type of way and a little bold and big for readability.</p>
                    <p className="story">Don't forget to be putting fullstops, ya dip! And you'll need to find lots of content to fill this space. It can be as big as it needs to be.</p>
                    <p className="story">We're a small team composed of 4 members, two of them unknowingly. We each do our part to ensure that we counsel sexually abused girls and give them skills that help them contribute to society in constructive ways.</p>
                    <p className="story">Have you noticed that your content goes higher the more it becomes? You need to fix that asap! PS. Nothing a few break tags at the top can't do.</p>
                </div>
            </div>
        </div>
    )
}