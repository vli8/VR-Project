const SELECTED_THEME = 'SELECTED_THEME'
export const setTheme = (theme)=>{
    return {
        type: SELECTED_THEME,
        payload: theme
    }
}
const initialState = {selectedTheme: ''}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SELECTED_THEME: return {...state, selectedTheme: action.payload}
        default: return state
    }
}
export default reducer