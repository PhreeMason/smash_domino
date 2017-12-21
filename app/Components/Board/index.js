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
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Board extends Component{
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
      
     

  
      {hand}

    </View>
    );
  }
}

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#127510',
    flexDirection: 'row'
  },
  playerSide:{

  },
  dropZone:{

  },
  EnemyLeft: {

  },
  EnemyRight:{

  },
  EnemyTop:{

  }
});

function mapStateToProps(state) {
  return {
    dominoImageData: state.dominoImageData,
  }
}

export default connect(mapStateToProps)(Board)