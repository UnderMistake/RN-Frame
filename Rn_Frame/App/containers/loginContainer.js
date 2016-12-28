/*
 * @Author: wzx 
 * @Date: 2016-12-23 05:38:34 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 05:56:19
 */

import React, { Component, } from 'react';
import { connect } from 'react-redux';
import Login from '../components/login';
import Actions from '../actions'

class loginContainer extends Component {

    render() {
        return ( <
            Login {...this.props }
            />
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;
    return {
        login,
    }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

export default connect(mapStateToProps)(loginContainer);