/*
 * @Author: wzx 
 * @Date: 2016-12-24 06:01:03 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-24 06:02:39
 */


import { combineReducers } from 'redux';
import login from './login';

//bind
const rootReducer = combineReducers({
    login,
})

export default rootReducer;