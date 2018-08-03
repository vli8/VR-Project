const SELECTED_MUSIC = 'SELECTED_MUSIC'
export const setMusic = (music)=>{
    return{
        type: SELECTED_MUSIC,
        payload: music
    }
}

const initialState = {song:''}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SELECTED_MUSIC: return {...state, song: action.payload}
        default: return state
    }
}
export default reducer