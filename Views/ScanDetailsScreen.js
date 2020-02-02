import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, Clipboard} from 'react-native';
export class ScanDetails extends Component {
  static navigationOptions = {
    /**
     * @description - Setting header to null for hiding header
     */
    title: 'Scanned Details',
  };
  render() {
    console.log(this.props.navigation.state.params.scannedDetails);
    return (
      <View>
        <View style={{marginBottom: 15, padding: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#acb3bf', paddingBottom: 6}}>
              Barcode Type
            </Text>
            <View style={{backgroundColor: '#74BFFF', borderRadius: 5}}>
              <TouchableOpacity
                onPress={() =>
                  Clipboard.setString(
                    this.props.navigation.state.params.scannedDetails.type.toString(),
                  )
                }>
                <Text style={{fontSize: 15, color: '#0A79DF', padding: 6}}>
                  Copy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontSize: 17, color: '#555b6b'}}>
            {this.props.navigation.state.params.scannedDetails.type.toString()}
          </Text>
        </View>
        <View style={{marginBottom: 15, padding: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#acb3bf', paddingBottom: 6}}>
              Barcode Text
            </Text>
            <View style={{backgroundColor: '#74BFFF', borderRadius: 5}}>
              <TouchableOpacity
                onPress={() =>
                  Clipboard.setString(
                    this.props.navigation.state.params.scannedDetails.data.toString(),
                  )
                }>
                <Text style={{fontSize: 15, color: '#0A79DF', padding: 6}}>
                  Copy
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{fontSize: 17, color: '#555b6b'}}>
            {' '}
            {this.props.navigation.state.params.scannedDetails.data.toString()}
          </Text>
        </View>
        {/* <View style={[styles.overlay, styles.bottomOverlay,]}>
          <Button
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.enterBarcodeManualButton}
            title="Scan Again"
          />
        </View> */}
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default ScanDetails;
