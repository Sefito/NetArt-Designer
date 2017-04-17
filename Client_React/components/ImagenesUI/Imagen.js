import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  PanResponder,
  Alert,
} from 'react-native';

const border2 = 2;
const border0=0;

export default class Imagen extends Component {


  constructor(props) {
    super(props);
    this.state = {
       fadeAnim3: new Animated.Value(0), // init opacity 0
       top:this.props.top,
       left:this.props.left,
       border:0,
       leftMove: this.props.left,
       topMove: this.props.top,
       anchura: this.props.anchura/5.4,
       altura: this.props.altura/3.6,
       opacidad:1,
       anchura2: this.props.anchura/6,
       altura2: this.props.altura/5,
       elevation:1,
     };
     this._panResponder={};
     this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
     this._handlePanResponderEnd =this._handlePanResponderEnd.bind(this);
     this._handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
     this.height = this.props.altura;
     this.width= this.props.anchura;
     this._previousLeft = this.props.left;
     this._previousTop  = this.props.top;
}

componentWillMount(){
  this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,

    });

}
 _handleStartShouldSetPanResponder(e, gestureState){
    // Should we become active when the user presses down on the circle?
    return true;
  };
_handleMoveShouldSetPanResponder(e, gestureState){
    // Should we become active when the user moves a touch over the circle?
    return true;
  };
_handlePanResponderGrant(e, gestureState) {
  if(gestureState.numberActiveTouches.length>1){
      Alert.alert(
            'Imagen seleccionada',
            "Has seleccionado la imagen: "+this.props.url,
          );
  }else{
  
    this.setState({
    anchura: this.state.anchura + 20,
    altura: this.state.altura + 20,
    anchura2: this.state.anchura2 + 20,
    altura2: this.state.altura2 + 20,
    border:2,
    opacidad:1,
    elevation:20,
  })
}
  };
_handlePanResponderMove(e, gestureState) {
  let l = this.state.leftMove + gestureState.dx;
  let t = this.state.topMove + gestureState.dy;
  if(l<0){
    l = 0;
  }
  if(t<0){
    t=0;
  }
  if(l>this.width){
    l=this.width-200;
  }
  if(t>this.height){
    t=this.height-200;
  }
  
  this.setState({
    border:2,
    leftMove:l,
    topMove: t,
    opacidad:1,
  })

  };
  _handlePanResponderEnd(e, gestureState) {

    this.setState({
      border:0,
      
      opacidad:1,
      anchura: this.state.anchura - 20,
      altura: this.state.altura - 20,
      anchura2: this.state.anchura2 - 20,
      altura2: this.state.altura2 - 20,
      elevation:1,
    })
  };


  render() {
        
    return (
               <View {...this._panResponder.panHandlers} style={[styles.capaIma,{flex:1,elevation:this.state.elevation, alignItems:'center',paddingTop:this.height/70, transform:[ {rotateZ:`${this.props.rotate}deg`}], marginTop:this.state.topMove, marginLeft:this.state.leftMove ,borderColor:'blue', borderWidth:this.state.border, width:this.state.anchura, height:this.state.altura,}]}>          
                <Image 
                  source={{uri:this.props.uri}}
                  style={{width:this.state.anchura2, height:this.state.altura2, opacity:this.state.opacidad}} >

                </Image>
                <Text style={{fontSize:7, marginLeft:10}}>{this.props.uri}</Text>
                </View>

          )
  }
}
const styles = StyleSheet.create({
  
  capaIma:{
    position:'absolute',
    backgroundColor:'white',
    opacity:1,
    

},
 
});