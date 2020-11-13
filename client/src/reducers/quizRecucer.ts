import { CREATE_QUIZ, QuizI } from "../actions/QuizActions";


type Actions = { type: typeof CREATE_QUIZ, payload: QuizI }


const quizReducer = (state = {}, action: Actions) => {
    switch (action.type) {
        case CREATE_QUIZ:
            return action.payload
        default:
            return state
    }
}

export default quizReducer