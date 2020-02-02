import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

export class SplashScreen extends Component {
  static navigationOptions = {
    /**
     * @description - Setting header to null for hiding header
     */
    header: null,
  };
  componentDidMount() {
    const {replace} = this.props.navigation;
    setTimeout(function() {
      replace('scan');
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../Images/logo.png')}></Image>
          <Text style={{color: '#4e4e4e'}}>Barcode Reader</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://underscoretec.com/');
            }}>
            <Text style={{color: '#0A79DF', padding: 5}}>
              Powered By Underscore Technology Pvt. Ltd.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
