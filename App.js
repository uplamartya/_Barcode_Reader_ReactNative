//IMPORTS
import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './Views/SplashScreen';
import ScanDetailsScreen from './Views/ScanDetailsScreen';
import ScanCodeScreen from './Views/ScanCodeScreen';

const AppNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    scan: {
      screen: ScanCodeScreen,
    },
    scanDetails: {
      screen: ScanDetailsScreen,
    },
  },
  {
    initialRouteName: 'splash',
  },
);

const Navigation = createAppContainer(AppNavigator);
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    );
  }
}
