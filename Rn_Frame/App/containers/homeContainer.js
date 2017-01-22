/**
 * Created by wzx on 17/1/21.
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

class HomeContainer extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>456</Text>
            </View>
        );
    }
}

export default HomeContainer;