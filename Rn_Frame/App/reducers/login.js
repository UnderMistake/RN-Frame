/*
 * @Author: wzx 
 * @Date: 2016-12-22 01:22:50 
 * @Last Modified by: wzx
 * @Last Modified time: 2017-01-06 15:24:07
 */

import * as types from '../constants/ActionType';

const initialState = {
    //username: 'superAdmin',
    username: '',
    password: '',
    logining: false,
    logined: false,
    rawData: undefined,
}

export default function login(state = initialState, action) {
    // state = Object.assign({}, state, {
    //     logined: false,
    // });
    switch (action.type) {
        case types.FETCH_LOGIN_RESULT:
            return Object.assign({}, state, {
                logining: true,
            });
        case types.RECEIVE_LOGIN_RESULT:
            return Object.assign({}, state, {
                logining: false,
                logined: true,
                rawData: action.rawData,
            });
        case types.CHANGE_LOGIN_AUTH:
            let newState = state;
            if (action.username != undefined && action.username.length >= 0) {
                newState = Object.assign({}, newState, {
                    username: action.username,
                });
            }
            if (action.password != undefined && action.password.length >= 0) {
                newState = Object.assign({}, newState, {
                    password: action.password,
                });
            }
            if (action.rawData != undefined) {
                newState = Object.assign({}, newState, {
                    rawData: action.rawData,
                });
            }
            return newState;
        default:
            return state;
    }
}