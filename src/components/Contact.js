import React from "react";
import {Link} from 'react-router-dom';


const Contact = () => {
    return (
        <div>
            <h1>contact</h1>
            <p>
                To view this developers <a href= 'https://github.com/amandaben21'>Github</a>
            </p>
            <Link to= '/'>Back </Link>
        </div>
    )
}

export default Contact;