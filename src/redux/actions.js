import {
    ADD_DISLIKE,
    INCREMENT_LIKES,
    ADD_INPUT, ADD_COMMENT,
    DELETE_COMMENT,
    LOAD_COMMENTS,
    DISPLAY_LOADER_ON,
    DISPLAY_LOADER_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF,
} from "./types"

export function incrementLikes() {
    return {
        type: INCREMENT_LIKES
    }
}
export function dislike() {
    return {
        type: ADD_DISLIKE
    }
}

export function inputText(text) {
    return {
        type: ADD_INPUT,
        text: text
    }
}

export function addComment(text, id) {
    return {
        type: ADD_COMMENT,
        data: {
            text: text,
            id: id
        }
    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id: id
    }
}

export function loadComments() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const jsonData = await response.json()
            console.log(jsonData)

            setTimeout(() => {
                dispatch({
                    type: LOAD_COMMENTS,
                    data: jsonData
                })
                dispatch(loaderOff())
            }, 1500)

        } catch (err) {
            dispatch(errorOn('Ошибка загрузки!'))
            dispatch(loaderOff())
        }
    }
}

export function loaderOn() {
    return {
        type: DISPLAY_LOADER_ON
    }
}

export function loaderOff() {
    return {
        type: DISPLAY_LOADER_OFF
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text: text
        })

        setTimeout(() => {
            dispatch(errorOff())
        }, 4000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}

