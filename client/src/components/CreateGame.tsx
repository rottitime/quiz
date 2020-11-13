import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Button from './Button/Button';

interface Props {
    quiz: any
}

const CreateGame: React.FC<Props> = ({ quiz }) => {


    return <>
        <h1>CreateGame</h1>
        <User isAdmin={true} />
        <Button to="/">Home</Button>

        {(quiz.code) ? `Your code is ${quiz.code}` : null}
    </>
}


const mapStateToProps = (state: any) => ({
    quiz: state.quiz
    // return { quiz }
})

export default connect(mapStateToProps)(CreateGame)