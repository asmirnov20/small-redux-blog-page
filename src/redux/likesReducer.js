import { ADD_DISLIKE, INCREMENT_LIKES } from "./types"

const initialState = {
    likes: 0
}

export function likesReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_LIKES:
            return { ...state, likes: state.likes + 1 }

        case ADD_DISLIKE:
            return { ...state, likes: state.likes - 1 < 1 ? 0 : state.likes - 1 }

        default: return state
    }
}