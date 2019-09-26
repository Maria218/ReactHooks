import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Fade.css"

import Home from "../main/home/Home";
import About from "../main/about/About";
import Members from "../main/members/Members";
import Contact from "../main/contact/Contact";

function Container({location}) {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/members" component={Members}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default withRouter(Container);