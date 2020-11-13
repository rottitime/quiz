import React from "react"
import { Link } from "react-router-dom";

type Props = {
    to: string,
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ to, children }) => {
    return <Link to={to} className="waves-effect waves-light btn-large">
        {children}
    </Link>
}


export default Button