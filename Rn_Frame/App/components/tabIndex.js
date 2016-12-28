/*
 * @Author: wzx 
 * @Date: 2016-12-24 06:21:25 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-24 06:57:03
 */

import React from 'react';
import {
  Dimensions,
  ListView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';


import * as types from '../constants/NavigatorTypes';

const deviceWidth = Dimensions.get('window').width;
const top = Platform.OS === 'ios' ? 20 : 0;

export default class IndexTab extends Component {
  render() {
    return (
      <View style={{flex : 1,}}>
        <View style={{height: 200, width: deviceWidth, marginTop: top}}>
        </View>
      </View>
    );
    }
}

