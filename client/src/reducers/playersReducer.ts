import { FETCH_PLAYERS, PlayerI } from "../actions/PlayersActions";

type State = PlayerI[]
type Actions = { type: typeof FETCH_PLAYERS, payload: PlayerI }

const defaultState: State = []

const playersReducer = (state: State = defaultState, action: Actions): State => {
    switch (action.type) {
        case FETCH_PLAYERS:
            return [...state, action.payload]
        default:
            return state
    }
}

export default playersReducer