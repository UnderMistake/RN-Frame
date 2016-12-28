/*
 * @Author: wzx 
 * @Date: 2016-12-26 04:22:10 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 04:29:15
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {getNavigator} from '../route';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ReadingContainer extends Component {
    
    render(){
        return(
            <View style={styles.container}>
            <Text>123</Text>
            </View>
        );
    }
}

export default ReadingContainer;