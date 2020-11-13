import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { createQuiz } from "../actions/QuizActions";

interface Props {
    isAdmin: boolean,
    createQuiz: (name: string) => void
}

const User: React.FC<Props> = ({ isAdmin, createQuiz }) => {

    const [name, setName] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [])

    const onNameSet = (event: React.MouseEvent<HTMLButtonElement>) => {
        createQuiz(name)
    }
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)

    return <div className="input-field">

        <label htmlFor="playername">Name</label>
        <input id="playername" type="text" value={name} onChange={onInputChange} ref={inputRef} placeholder="What's your name?" />
        <button onClick={onNameSet}>Ready</button>
    </div>

}

export default connect(null, { createQuiz })(User)