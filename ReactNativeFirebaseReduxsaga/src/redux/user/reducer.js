import * as ActionTypes from './../actionTypes';

const initialState = {

};

const userReducer = (state = initialState, action) => {
    console.log('userReducer', state);
    switch (action.type) {
        case ActionTypes.LOGIN:
            return Object.assign({}, action)
        case ActionTypes.LOGIN_SUCCESS:
            return Object.assign({}, action)
        case ActionTypes.LOGIN_FAIL:
            return Object.assign({}, action)
        case ActionTypes.SIGNUP:
            return Object.assign({}, action)
        case ActionTypes.SIGNUP_SUCCESS:
            return Object.assign({}, action)
        case ActionTypes.SIGNUP_FAIL:
            return Object.assign({}, action)
        default:
            return state;
    }
}

export default userReducer;