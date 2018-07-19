import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Modal, BackHandler } from 'react-native';

export default class FlashScreen extends Component {
  state = {
    modalVisible: true
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      !this.state.modalVisible ? this.setModalVisible(true) : '';
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    !visible ? this.props.initMath() : '';
  }
  
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        style={{flex: 1}}
        onRequestClose={() => {
          ''
        }}>
        <View style={{flex: 1, marginTop: 200, marginLeft: 50, marginRight: 50, marginBottom: 200}}>
          <View style={{flex: 1}}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={{flexGrow: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
              <Text style={{fontSize: 50}}>Play</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}
