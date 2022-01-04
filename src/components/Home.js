import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div>
            <h1>Welcome to School Notes Tracker 📝</h1>
            <Link to= '/about'>About</Link><br/>
            <Link to= '/contact'>Contact</Link>
        </div>
    
    )
}

export default Home;