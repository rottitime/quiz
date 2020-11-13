// import axios from 'axios';
import { Dispatch } from "redux";

export const FETCH_PLAYERS = 'FETCH_PLAYERS'
export const ADD_PLAYER = 'ADD_PLAYER'

export interface PlayerI {
    name: string,
    isAdmin: boolean
}

export const addPlayer = (player: PlayerI) => async (dispatch: Dispatch) => {
    dispatch({ type: ADD_PLAYER })
}

export const fetchPlayers = () => async (dispatch: Dispatch) => {
    // const res = await axios.get()
    dispatch({ type: FETCH_PLAYERS })
}