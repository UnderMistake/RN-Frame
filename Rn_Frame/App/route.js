/*
 * @Author: wzx 
 * @Date: 2016-12-26 03:38:07 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 06:52:50
 */

import loginView from './components/login';
import MainContainer from './containers/mainContainer';
import {
    Navigator,
} from 'react-native';

let navigator;

// PushFromRight
// PushFromLeft
// FloatFromRight
// FloatFromLeft
// FloatFromBottom
// FloatFromBottomAndroid
// FadeAndroid
// HorizontalSwipeJump
// HorizontalSwipeJumpFromRight
// VerticalUpSwipeJump
// VerticalDownSwipeJump

const routeMap = new Map();

routeMap.set('MainContainer', {
    component: MainContainer
});
routeMap.set('login', {
    component: loginView
});

// routeMap.set('ImageViewer', {
//     component: ImageViewer,
//     sceneAnimation: Navigator.SceneConfigs.FadeAndroid
// });

export function registerNavigator(tempNavigator) {
    if (navigator) {
        return;
    }
    navigator = tempNavigator;

}

export function getNavigator() {
    return navigator;
}

export function getRouteMap() {
    return routeMap;
}