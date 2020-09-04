export function activeThemeReducer (state={}, action){
    switch(action.type){
        case "THEME_SELECTED":
            return action.payload
            break
    }
    return state
}

export function activeLangReducer (state={}, action){
    switch(action.type){
        case "LANGUAGE_SELECTED":
            return action.payload
            break
    }
    return state
}