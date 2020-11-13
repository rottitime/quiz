import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {

    return <>
        <h1>Landing page</h1>
        <Link to="/create" className="waves-effect waves-light btn-large">Create</Link>
        <Link to="/join" className="waves-effect waves-light btn-large">Join</Link>

    </>
}

export default Landing