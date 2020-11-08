import React from "react";
import { Link } from "react-router-dom";

const CreateGame: React.FC = () => {
    return <>
        <h1>CreateGame</h1>
        <Link to="/" className="waves-effect waves-light btn-large">Home</Link>
    </>
}

export default CreateGame