/*
 * @Author: wzx 
 * @Date: 2016-12-22 03:15:14 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 05:49:12
 */

import * as types from '../constants/ActionType';
import { LOGIN_URL } from '../api/Network';
import { request } from '../util/Utils'

export function fetchLogin(username, password) {
    return dispatch => {
        dispatch(fetchLoginResult());
        return request(LOGIN_URL)
            .then((responseData) => {
                dispatch(receiveLoginResult(responseData));
            })
            .catch((error) => {
                console.error('fetchLogin error: ' + error);
                dispatch(receiveLoginResult());
            })
    }
}

export function changeLoginAuth({ username, password, rawData }) {
    return {
        type: types.CHANGE_LOGIN_AUTH,
        username: username,
        password: password,
        rawData: rawData
    }
}

function fetchLoginResult() {
    return {
        type: types.FETCH_LOGIN_RESULT,
    }
}

function receiveLoginResult(responseData) {
    return {
        type: types.RECEIVE_LOGIN_RESULT,
        rawData: responseData,
    }
}