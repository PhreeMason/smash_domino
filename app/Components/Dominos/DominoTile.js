import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
  Dimensions,
  Image
} from 'react-native';


export default class DominoTile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(0.4)
    };
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
  
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value, y: this.state.pan.y._value
        });
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      },
  
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
  
      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        Animated.spring(
          this.state.scale,
          { toValue: 0.4, friction: 3 }
        ).start();
      }
    });
  }
    
  render(){
    // Destructure the value of pan from the state
    let { pan, scale } = this.state;
    
    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];
    
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let rotate = '0deg';
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
  return ( 
    <Animated.Image 
      style={[imageStyle, styles.identifier]} 
      {...this._panResponder.panHandlers}
      source={this.props.imageData.uri}
    />
    );
  }
}

// let Window = Dimensions.get('window');
let styles = StyleSheet.create({
  identifier:{
    backgroundColor: 'red'
  }
});