/*
 * @Author: wzx 
 * @Date: 2016-12-22 04:07:01 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 07:07:39
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
import App from './containers/app';

let store = configureStore();

class Root extends Component {
		constructor(){
		super();
		this.state = {
			isLoading: true,
			store: configureStore(()=>{this.setState({isLoading: false})})
		}
	}
	
	render() {
		// if(this.state.isLoading){
		// 	console.log('loading app');
		// 	return null;
		// }
		return (
			<Provider store={this.state.store}>
        <App />
      </Provider>
		)
	}
}

export default Root;