import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Alert} from 'react-native';

import BarcodeScanner, {
  Exception,
  FocusMode,
  TorchMode,
  CameraFillMode,
  BarcodeType,
  pauseScanner,
  resumeScanner,
} from 'react-native-barcode-scanner-google';

export default class ScanCodeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <BarcodeScanner
          style={{flex: 1}}
          onBarcodeRead={({data, type}) => {
            console.log(data)
            // handle your scanned barcodes here!
            // as an example, we show an alert:
            Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
          }}
          onException={exceptionKey => {
            // check instructions on Github for a more detailed overview of these exceptions.
            switch (exceptionKey) {
              case Exception.NO_PLAY_SERVICES:
              // tell the user they need to update Google Play Services
              case Exception.LOW_STORAGE:
              // tell the user their device doesn't have enough storage to fit the barcode scanning magic
              case Exception.NOT_OPERATIONAL:
              // Google's barcode magic is being downloaded, but is not yet operational.
              default:
                break;
            }
          }}
          focusMode={FocusMode.AUTO /* could also be TAP or FIXED */}
          torchMode={TorchMode.ON /* could be the default OFF */}
          cameraFillMode={CameraFillMode.COVER /* could also be FIT */}
          barcodeType={
            BarcodeType.ALL /* replace with ALL for all alternatives */
          }
        />
      </View>
    );
  }
}
