
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
  TouchableOpacity
} from 'react-native';
const img = require('../img/capalogin.png')

import IdleTimerManager from 'react-native-idle-timer';
const {height, width} = Dimensions.get('window');
const panelH = height*7/10;
const panelW = width*7/10;
export default class LoginUI extends Component {

 constructor(props) {
    super(props);
    this.state = {
       fadeAnim: new Animated.Value(0),
       marginTop: new Animated.Value(height), // init opacity 0
       email: 'INTRODUCE TU CORREO ELECTRONICO',
       pass:'INTRODUCE TU CONTRASEÑA',
       ok:false,
     };
     this._onPress = this._onPress.bind(this);
     
}

componentDidMount () {
  Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 0.8,
       duration:2000}            // Configuration
     ).start();
  Animated.timing(          // Uses easing functions
       this.state.marginTop,    // The value to drive
       {toValue: 0,
       duration:1500}            // Configuration
     ).start();
      
}
componentWillUnmount () {
  
  
}

_onPress(){
    Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 0.0,
       duration:1000}            // Configuration
     ).start(()=>{
    
      this.props._onClick();
    });
    Animated.timing(          // Uses easing functions
       this.state.marginTop,    // The value to drive
       {toValue: height,
       duration:1000}            // Configuration
     ).start();
  }  
  

  render() {
        
    return (


<Animated.View style={[styles.capaMenu, {height:panelH, width:panelW, opacity: this.state.fadeAnim, marginTop: this.state.marginTop}]}>
          <Image
                source={img}
                style={{width:width,height:height,}} >
            <View style={styles.capaRegistro}>
              <Text> Numero de renderizados {panelH, panelW}
            </Text>
            </View>
            <View style={styles.capaLogin}>
              <View style={styles.capaTLogin}>
                <Text style={{fontSize:panelW/22}}> LOGIN
              </Text>
              </View>
              <View style={styles.capaEmailL}>
                <Text style={{fontSize:panelW/50}}> CORREO ELECTRONICO
              </Text>
              </View>
              <View style={styles.capaEmailC}>
                <TextInput 
                  underlineColorAndroid="transparent"
                  placeholderTextColor="gray"
                  style={{height: 40, fontSize:panelW/70, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}/>
              </View>
              <View style={styles.capaEmailL}>
                <Text style={{fontSize:panelW/50}}> CONTRASEÑA
              </Text>
              </View>
              <View style={styles.capaEmailC}>
                <TextInput 
                  underlineColorAndroid="transparent"
                  placeholderTextColor="gray"
                  style={{height: 40, fontSize:panelW/70, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(pass) => this.setState({pass})}
                  value={this.state.pass}/>
              
              </View>
              <View style={styles.capaEmailL}>
                <TouchableOpacity onPress={this._onPress}>
        <Image
          style={[styles.button,{height:40, width:150, marginLeft:panelW*0.1}]}
          source={{uri:'http://im.loadim.com/yZ.png'}}
          resizeMode="stretch"

        />
      </TouchableOpacity>
              
              </View>
            </View>
          </Image>
          </Animated.View>
          )
  }
}

const styles = StyleSheet.create({
  
  capaMenu: {
    backgroundColor:'#EFE7DA',
    opacity:0.5,
    elevation:6,
    

  },
  capaRegistro: {
    flex:1,

    flexDirection:'column',
    height:panelH,
    width:panelW*0.4,
    position:'absolute',
    right:0,
    top:0,
    backgroundColor:'black',
    opacity:0.9,
  },
  capaLogin: {
    
    height:panelH,
    width:panelW*0.6,
    position:'absolute',
    left:0,
    top:0,
    
    
  },
  capaTLogin:{
    marginTop:panelH/30,
    marginLeft:panelW/30,
    
    width:panelW*0.6,
    height:panelH/10,
    
  },
  capaEmailL:{
    marginTop:panelH/30,
    marginLeft:panelW/30,
    paddingTop:panelH/30,
    width:panelW*0.6,
    height:panelH/10,
  },
  capaEmailC:{
    marginTop:0,
    marginLeft:panelW/30,
    
    width:panelW*0.4,
    height:panelH/15,
  }
});