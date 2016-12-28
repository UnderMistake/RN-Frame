/*
 * @Author: wzx 
 * @Date: 2016-12-22 03:18:13 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 03:41:04
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
  Alert,
  Linking,
  InteractionManager,
} from 'react-native';

import TabBar from '../components/NavigationBar';
import Index from './tabIndex';
import Setting from './tabSetting';

var HEIGHT = Dimensions.get('window').height;

export default class MainScreen extends Component{
  constructor(props) {
      super(props);
      this.state = {
        page: 'message',
        loading: false,
      };
  }

  renderPage(){
    if(this.state.page === 'message'){
      return (
        <Index {...this.props}/>
      );
    }
    if(this.state.page === 'setting'){
      return (
        <Setting {...this.props}/>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainPage}>
          {this.renderPage()}
        </View>
      <TabBar selected={this.state.page} style={{backgroundColor:'#322a33', bottom:0,}}>
          <Image
            name='message' selectedStyle={{tintColor: '#ef6c00'}}
            style={{width:22,height: 34,}}
            selectedIconStyle={{borderTopWidth:2,borderTopColor:'#ef6c00'}}
            source={require('../img/icon/icon-home-active.png')} />
          <Image
            name='setting' selectedStyle={{tintColor: '#ef6c00'}}
            style={{width:22,height: 34,paddingTop: 2,}}
            selectedIconStyle={{borderTopWidth:2,borderTopColor:'#ef6c00'}}
            source={require('../img/icon/icon-setting-active.png')} />
      </TabBar>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainPage: {
    height: Platform.OS === 'ios'? HEIGHT-50 : HEIGHT-75,
  }
});
