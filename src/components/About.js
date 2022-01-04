import React from "react";
import {Link} from 'react-router-dom';


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>
                School Notes Tracker is a simple website where you can jot down 
                all Notes you have here really quickly and look back on what you jot down
            </p>
            <Link to= '/'>Back</Link>
        </div>
    )
}

export default About;