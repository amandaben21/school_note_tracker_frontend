import React from "react";
import { Route, Switch } from "react-router";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

const Router = () => {
    return(
        <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/about'component={About} />
            <Route path ='/contact' component={Contact} /> 
        </Switch>
        
    )
}

export default Router;