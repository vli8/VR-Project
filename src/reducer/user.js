const SET_NAME = 'SET_NAME'

export const setName = (name)=>{
    return{
        type: SET_NAME,
        payload: name
    }
}

const intialState = {
    name: ''
}

const reducer = (state = intialState, action)=>{
    switch(action.type){
        case SET_NAME: return{...state, name: action.payload}
        default: return state
    }
}

export default reducer