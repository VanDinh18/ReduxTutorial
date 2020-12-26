import { select, call, put, take } from 'redux-saga/effects';
import { User } from '../../api/Firebase';

import * as ActionTypes from './../actionTypes';
import * as Firebase from './../../api/Firebase';

export function* loginWithEmailSaga(action) {
    try {
        console.log('userSaga action --', action);
        const state = yield select();
        const response = yield call(Firebase.User.loginWithEmail, action);
        yield put({ type: ActionTypes.LOGIN_SUCCESS, response })
    }
    catch (error) {
        yield put({ type: ActionTypes.LOGIN_FAIL, error });
    }
}

export function* signUpWithEmailPasswordSaga(action) {
    try {
        console.log("action", action);
        const state = yield select();
        console.log("state", state);
        const response = yield call(Firebase.User.signUpWithEmailPassword, action);
        yield put({ type: ActionTypes.SIGNUP_SUCCESS, response });
    }
    catch (error) {
        yield put({ type: ActionTypes.SIGNUP_FAIL, error });
    }
}