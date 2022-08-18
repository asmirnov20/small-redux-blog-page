import { ADD_INPUT } from "./types"

const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT:
            return { ...state, text: action.text }
        
        default: return state
    }
}