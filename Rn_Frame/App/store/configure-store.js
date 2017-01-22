/*
 * @Author: wzx
 * @Date: 2016-12-22 06:18:53
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 07:06:20
 */

import { createStore, applyMiddleware ,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

// const logger = store => next => action => {
// 	if(typeof action === 'function') console.log('dispatching a function');
// 	else console.log('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// };

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

// let middlewares = [
// 	logger,
// 	thunkMiddleware
// ];

//let createAppStore = applyMiddleware(...middlewares)(createStore)(rootReducer);

//export default function configureStore(){
	//const store = autoRehydrate()(createAppStore)(rootReducer);
	//const store=applyMiddleware(...middlewares)(createStore)(rootReducer);
	// let opt = {
	// 	storage: AsyncStorage,
	// 	transform: [],
	// 	//whitelist: ['userStore'],
	// };
	// persistStore(store, opt, onComplete);
	//return store;
//}

var middlewares = compose(applyMiddleware(thunkMiddleware, logger), autoRehydrate());

export default function configureStore() {
  const store = createStore(rootReducer, undefined, middlewares);
  persistStore(store, {storage: AsyncStorage});
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
