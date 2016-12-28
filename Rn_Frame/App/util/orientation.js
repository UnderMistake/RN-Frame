/*
 * @Author: wzx 
 * @Date: 2016-12-26 06:40:17 
 * @Last Modified by:   wzx 
 * @Last Modified time: 2016-12-26 06:40:17 
 */


import {
    Platform,
    NativeModules
} from 'react-native';
import OrientationIOS from 'react-native-orientation';
const { Orientation: OrientationAndroid } = NativeModules;

let Orientation;

if (Platform.OS === 'ios') {
    Orientation = OrientationIOS;
} else {
    Orientation = OrientationAndroid;
}

export default Orientation;