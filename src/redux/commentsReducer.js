import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, LOAD_COMMENTS } from "./types"

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            console.log(state);
            return { ...state, comments: [...state.comments, action.data] }

        case UPDATE_COMMENT:
            const { comments } = state
            const { data } = action
            const newComments = comments.map(item => item.id === data.id ? data : item)
            return { ...state, comments: newComments }

        case DELETE_COMMENT:
            const nextComments = state.comments.filter(item => item.id !== action.id)
            return { ...state, comments: nextComments }

        case LOAD_COMMENTS:
            console.log(state);
            const loadedComments = action.data.map(item => {
                return {
                    text: item.name,
                    id: item.id
                }
            })
            console.log(loadedComments);
            return { ...state, comments: loadedComments }

        default:
            return state
    }

}