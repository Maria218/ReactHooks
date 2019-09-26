import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../main/home/Home";
import About from "../main/about/About";
import Members from "../main/members/Members";
import Contact from "../main/contact/Contact";

export default function Container() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/members" component={Members}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
}