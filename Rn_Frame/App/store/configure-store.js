/*
 * @Author: wzx 
 * @Date: 2016-12-22 06:18:53 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 07:06:20
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import rootReducer from '../reducers/index';

const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunkMiddleware
];

//let createAppStore = applyMiddleware(...middlewares)(createStore)(rootReducer);

export default function configureStore(){
	//const store = autoRehydrate()(createAppStore)(rootReducer);
	const store=applyMiddleware(...middlewares)(createStore)(rootReducer);
	// let opt = {
	// 	storage: AsyncStorage,
	// 	transform: [],
	// 	//whitelist: ['userStore'],
	// };
	// persistStore(store, opt, onComplete);
	return store;
}