/*
 * @Author: wzx
 * @Date: 2016-12-26 05:25:37
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 06:41:09
 */


import React, {Component}  from 'react';
import ReactNative from 'react-native';

const {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Dimensions,
  InteractionManager,
  AppState,
  Platform,
} = ReactNative;

import {connect} from 'react-redux';
import Splash from '../components/checkLogin';
import Orientation from '../util/orientation';

var _navigator, _route;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class App extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

    componentWillMount() {
        Orientation.lockToPortrait();
        if (Platform.OS === 'android') {
            Orientation.registerOnOrientationChanged();
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
      componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

  renderScene(route, navigator) {
    let Component = route.component;
    _navigator = navigator;
    _route = route;
    return (
      <Component navigator={navigator} route={route} />
    );
  }

  //出场动画
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}/>
      </View>
    );
  }

    onBackAndroid() {
    const routers = this.navigator.getCurrentRoutes();
    if (routers.length > 1) {
      this.navigator.pop();
      return true;
    }
    let now = new Date().getTime();
    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
      return false;//控制权交给原生
    }
    lastClickTime = now;
    Toast.show('再按一次退出一个');
    return true;
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
});

function mapStateToProps(state) {
  const {timeConsuming, login} = state;
  return {
    timeConsuming,
    login
  }
}

export default connect(mapStateToProps)(App);
