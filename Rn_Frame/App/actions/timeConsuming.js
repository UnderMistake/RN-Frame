'use strict';

import * as types from '../constants/ActionType';


export function startHandleTimeConsuming() {
    return {
        type: types.START_HANDLE_TIME_CONSUMING,
    }
}

export function stopHandleTimeConsuming() {
    return {
        type: types.STOP_HANDLE_TIME_CONSUMING,
    }
}