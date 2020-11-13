import axios from "axios";
import { Dispatch } from 'redux'

import { PlayerI } from "./PlayersActions";

export const CREATE_QUIZ = 'CREATE_QUIZ'

export interface QuizI {
    code: string,
    host: string,
    players: PlayerI[],
    game?: any
}

export const createQuiz = (host: string) => async (dispatch: Dispatch) => {
    const res = await axios.post('/api/quiz', { host, players: [{ name: host }] })
    dispatch({ type: CREATE_QUIZ, payload: res.data })
} 