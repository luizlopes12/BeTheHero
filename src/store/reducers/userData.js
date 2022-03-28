const INITIAL_STATE = {}
const userData = (state = INITIAL_STATE, action) => {
    if(action.type === 'SET_USER_DATA'){
        return action.data
    }
    return state
}

export default userData
