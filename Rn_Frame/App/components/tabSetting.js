/*
 * @Author: wzx 
 * @Date: 2016-12-24 06:35:02 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-24 06:50:13
 */

import React from 'react';
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Linking,
  InteractionManager
} from 'react-native';

const top = Platform.OS === 'ios' ? 20 : 0;

export default class SettingTab extends Component {
  render() {
    return(
      <View style={styles.background}>
      <Text>setting</Text>
      </View>
    );
  }

};
var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: gray,
  },

});
