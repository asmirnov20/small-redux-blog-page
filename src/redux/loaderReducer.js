import { DISPLAY_LOADER_OFF, DISPLAY_LOADER_ON, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from "./types"

const initialState = {
    show: false,
    error: null
}

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADER_ON:
            return { ...state, show: true }

        case DISPLAY_LOADER_OFF:
            return { ...state, show: false }

        case ERROR_DISPLAY_ON:
            return { ...state, error: action.text }

        case ERROR_DISPLAY_OFF:
            return { ...state, error: null }

        default:
            return state
    }
}