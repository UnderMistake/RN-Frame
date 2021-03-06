/*
 * @Author: wzx 
 * @Date: 2016-12-23 02:53:48 
 * @Last Modified by: wzx
 * @Last Modified time: 2017-01-06 15:32:39
 */
'use strict';

import React,{ Component, }  from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import Colors from '../style/commonStyle';
import {fetchLogin, changeLoginAuth} from '../actions/login';
import {startHandleTimeConsuming, stopHandleTimeConsuming} from '../actions/timeConsuming';
import MainContainer from '../containers/mainContainer';
import global from '../util/GlobalStorage';//全局storage

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {login} = nextProps;
    if(login.logined){
      //nextProps.dispatch(stopHandleTimeConsuming());
      if(!login.rawData) {
        Alert.alert('', '网络请求失败，请稍后再试！', [{text: '好'},]);
      } else if (login.logined) {
          global.storage.save({
             key: 'userName',  //注意:请不要在key中使用_下划线符号!
             rawData: {
                userName: login.username,
                password: login.password,
                rawData: login.rawData,
            },
          });
          nextProps.navigator.push({
            name: "Main",
            component: MainContainer,
          });
        
      } else if (!login.logined) {
        Alert.alert('', login.rawData.msg, [{text: '好'},]);
      }
    }
  }

  render() {
    const {dispatch, login} = this.props;
    const dismissKeyboard = require('dismissKeyboard');
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center',marginTop:32}}>
          <Image style={{width: 90,height: 90,margin: 8,borderRadius:0,}} source={require('../image/logo.png')}/>
        </View>

        <View style={{margin:16,backgroundColor:'#fff',elevation: 4}}>
          <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
            <View style={{flexDirection: 'row',height: 48,alignItems: 'center'}}>
              <Image style={{width: 32,height: 32,margin: 8}} source={require('../image/icon-user.png')}/>
              <TextInput  style={{height: 48,flex: 1}}
                placeholder={'请输入用户名'}
                value={login.username}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={(username) => dispatch(changeLoginAuth({username: username}))}/>
            </View>
          </TouchableWithoutFeedback>

          <View style={{marginLeft:8,height:1,backgroundColor:'#ccc',marginRight: 8}}/>
          <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
            <View style={{flexDirection: 'row', height: 48, backgroundColor: 'white', alignItems: 'center'}}>
              <Image style={{width: 32,height: 32,margin: 8}} source={require('../image/icon-locks.png')}/>
              <TextInput style={{height: 48,flex: 1}}
                placeholder={'请输入密码'}
                value={login.password}
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                onChangeText={(password) => dispatch(changeLoginAuth({password: password}))}/>
            </View>
          </TouchableWithoutFeedback>

        </View>

        <View style={{marginTop: 32,marginLeft: 16,marginRight:16,elevation: 4,backgroundColor:Colors.mainColor}}>
          <TouchableHighlight
            onPress={this.onLogin}
            underlayColor={'#999'}
            style={{height: 48,alignItems: 'center',justifyContent:'center'}}>
            <Text style={{fontSize: 16,color: 'black',fontWeight: '300',}}>登        录</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  onLogin() {
    const {dispatch, login} = this.props;
    dispatch(fetchLogin(login.username, login.password));
    //dispatch(startHandleTimeConsuming());
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
  },
});
