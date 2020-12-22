import * as ActionTypes from './../actionTypes';

const initialState = {};

const userReducer = (state = initialState, action) => {
    console.log('userReducer', JSON.stringify(action));
    switch (action.type) {
        case ActionTypes.LOGIN:
            return Object.assign({}, state)
        case ActionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default userReducer;