import React from "react";
import { Route, Routes} from "react-router";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

const Router = () => {
    return(
        <Routes>
            <Route exact path='/'element={<Home />} />
            <Route path='/about'element={<About />} />
            <Route path ='/contact' element={<Contact />} /> 
        </Routes>
        
    )
}

export default Router;