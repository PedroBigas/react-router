

export default function loginReducer(state = false){
    switch (state.type){
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false
        default:
            return state
    }
}