import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import IntroOneScreen from './IntroOneScreen';
import StartHeightScreen from './StartHeightScreen';

export default class StartUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    setTimeout(() => {
      this.props.navigation.navigate('IntroOneScreen');
    }, 2000);

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff'
        }}
      >
        <Image
          source={require('../../img/healer/logoHealer.png')}
          style={{width: 202, height: 51}}
        />
      </View>
    );
  }
}
