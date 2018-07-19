import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, Dimensions, Modal, BackHandler } from 'react-native';
import FlashScreen from './app/components/FlashScreen'

export default class FreakingMath extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: -1,
      math: '',
      result: '',
      result_show: '',
      loop: [],
      timeCounter: Dimensions.get('window').width,
      width_screen: Dimensions.get('window').width,
      modalVisible: true
    }
    this.initMath = this.initMath.bind(this);
    this.stopLoop = this.stopLoop.bind(this);
  } 

  initMath() {
    this.stopLoop();
    const list_oparetors_easy = ['+', '-'];
    const one = Math.floor(Math.random() * 10);
    const two = Math.floor(Math.random() * 10);
    const operator = list_oparetors_easy[Math.floor(Math.random() * list_oparetors_easy.length)];
    const result = eval('one ' + operator + ' two');
    const result_show = eval('result '+ list_oparetors_easy[Math.floor(Math.random() * list_oparetors_easy.length)] + ' Math.floor(Math.random() * 2)');
    this.setState({
      math: '' + one + operator + two + '=' + result_show,
      result: result,
      result_show: result_show,
      score: this.state.score += 1
    });
    this.countDown();
  }

  countDown() {
    const loop = setInterval(() => {
      if(this.refs.timeCounter){
        this.refs.timeCounter.measure((ox, oy, width, height) => {
          this.setState({timeCounter: width - this.state.width_screen/10});
        });
        if(this.state.timeCounter <= 0){
          this.setState({timeCounter: Dimensions.get('window').width});
          this.onTimeover();
          this.stopLoop();
          this.setState({score: -1});
        };
      }
    }, 100);
    this.setState({loop: [...this.state.loop, loop]});
  }

  stopLoop(){
    this.state.loop.forEach(function(loop){
      clearInterval(loop);
    });
  }

  onPressTouchableHighlight(boolean) {
    this.setState({timeCounter: Dimensions.get('window').width});
    this.stopLoop();
    if((this.state.result == this.state.result_show) == boolean){
      this.initMath();
    } else {
      this.onTimeover();
      this.setState({score: 0});
    } 
  }

  onTimeover() {
    this.state.loop.forEach(function(loop){
      clearInterval(loop);
    });
    Alert.alert('Opps',
      'Gem over, score: ' + this.state.score,
      [{text: 'Again'}]
    );
    this.initMath();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlashScreen initMath={this.initMath}/>
        <View style={{flex: 3, backgroundColor: 'powderblue'}}>
          <View ref="timeCounter" style={{width: this.state.timeCounter,height: 35, marginTop: 50, backgroundColor: 'green'}}>
            <Text style={{fontSize:30, color: 'white'}}>{this.state.score}</Text>
          </View>
          <View style={{height: 100, marginVertical: 180, marginHorizontal: 10}}>
            <Text style={{fontSize:50, color: 'white', textAlign: 'center'}} ref="math">{this.state.math}</Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableHighlight
            style={{flexGrow: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => this.onPressTouchableHighlight(true)}>
            <Text style={{fontSize:24, color: 'white'}}>True</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flexGrow: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => this.onPressTouchableHighlight(false)}>
            <Text style={{fontSize:24, color: 'white'}}>False</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};
