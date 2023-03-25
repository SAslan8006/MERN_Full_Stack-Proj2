

const userReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case "REGISTER":
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload
            }
        case "LOGIN":
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            localStorage.clear()
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export default userReducer;