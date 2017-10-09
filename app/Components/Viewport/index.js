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
import DominoTile from '../Dominos/DominoTile'
import {shuffle} from '../../helpers'
import {connect} from 'react-redux'

class Viewport extends Component{
  constructor(props) {
    super(props);
    this.state = {
      domKeys: []
    };
  }
  componentWillMount() {
    let imageKeys = shuffle(Object.keys(this.props.dominoImageData))
    this.setState({
      domKeys: imageKeys
    })
  }
    
  render(){
    let {domKeys} = this.state 
    let images = this.props.dominoImageData
    let hand = domKeys.slice(0, 7).map((tileName, index)=>{
      return(
        <DominoTile key={index} imageData={images[tileName]}/>
      )
    })
  return (
    <View style={styles.container}>
      <View style={styles.dropZone}>
        
      </View>

      <View style={styles.draggableContainer}>
      {hand}
      </View>
    </View>
    );
  }
}

let Window = Dimensions.get('window');
let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#2c3e50',
  },
  dropZone:{
    height: 200,
    backgroundColor:'#6b0d42'
  },
  draggableContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

function mapStateToProps(state) {
  return {
    dominoImageData: state.dominoImageData,
  }
}

export default connect(mapStateToProps)(Viewport)