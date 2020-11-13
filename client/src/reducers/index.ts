import { combineReducers } from 'redux'
import quizRecucer from "./quizRecucer";
import playersReducer from "./playersReducer";

export default combineReducers({
    quiz: quizRecucer,
    players: playersReducer
})