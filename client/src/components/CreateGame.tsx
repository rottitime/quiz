import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import User from "./User";

interface Props {
    quiz: any
}

const CreateGame: React.FC<Props> = ({ quiz }) => {


    return <>
        <h1>CreateGame</h1>
        <User isAdmin={true} />
        <Link to="/" className="waves-effect waves-light btn-large">Home</Link>

        {(quiz.code) ? `Your code is ${quiz.code}` : null}
    </>
}


const mapStateToProps = (state: any) => ({
    quiz: state.quiz
    // return { quiz }
})

export default connect(mapStateToProps)(CreateGame)