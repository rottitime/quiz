import React from "react";
import Button from './Button/Button';
import { Link } from "react-router-dom";

const Landing: React.FC = () => {

    return <>
        <h1>Landing page</h1>
        <Button to="/create">Create</Button>
        <Button to="/join">Join</Button>

    </>
}

export default Landing