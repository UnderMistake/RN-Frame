/*
 * @Author: wzx 
 * @Date: 2016-12-26 05:27:55 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 09:56:24
 */


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  InteractionManager
} from 'react-native';

import Animated from 'Animated';
import global from '../util/GlobalStorage';
import LoginContainer from '../containers/loginContainer';
import MainContainer from '../containers/mainContainer';
import {changeLoginAuth} from '../actions/login';
import {connect} from 'react-redux';

var WINDOW_WIDTH = Dimensions.get('window').width;

class SplashScreen extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        bounceValue: new Animated.Value(1),
      };
  }

  componentDidMount() {
    const {navigator, dispatch} = this.props;
    navigator.push({
      name:"Login",
      component:LoginContainer
    });
    // setTimeout(() => {
    //   global.storage.load({
    //     key: 'userName',
    //   }).then((ret)=>{
    //     if (ret.userName && ret.password && ret.rawData){
    //       dispatch(changeLoginAuth({username: ret.userName, password: ret.password, rawData: ret.rawData}))
    //       navigator.push({
    //         name: "Main",
    //         component: MainContainer,
    //       });
    //     } else {
    //       InteractionManager.runAfterInteractions(() => {
    //         navigator.resetTo({
    //           component: LoginContainer,
    //           name: 'Login'
    //         });
    //       });
    //     }
    //   }).catch((err)=>{
    //     console.log('setAotoLogin error ==> ', err);
    //     global.storage.save({
    //       key: 'userName',  //注意:请不要在key中使用_下划线符号!
    //       rawData: {
    //       },
    //     });
    //     if(!err){
    //       InteractionManager.runAfterInteractions(() => {
    //         navigator.resetTo({
    //           component: LoginContainer,
    //           name: 'Login'
    //         });
    //     });}
    //   })
    // }, 2000);
  }

  render() {
    var img, text;
    img = require('../image/lunch.png');
    text = '';

    return(
      <View style={styles.container}>
        <Animated.Image
          source={img}
          style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }}/>
        <Text style={styles.text}>
            {text}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
});

function mapStateToProps(state) {
  const {login} = state;
  return {
    login
  }
}

export default connect(mapStateToProps)(SplashScreen);
