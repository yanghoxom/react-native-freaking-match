import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

export default class FreakingMath extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number_one: 1,
      number_two: 2
    }
  }

  onPressTouchableHighlight() {
    Alert.alert('You taaped the TouchableHighlight!');
  }

  onPressTouchableHighlightTwo() {
    Alert.alert('You taaped the TouchableHighlight2!');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}}></View>
        <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableHighlight
            style={{flexGrow: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
            onPress={this.onPressTouchableHighlight}>
            <Text style={{fontSize:24, color: 'white'}}>True</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flexGrow: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
            onPress={this.onPressTouchableHighlightTwo}>
            <Text style={{fontSize:24, color: 'white'}}>False</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};
