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

const {height, width} = Dimensions.get('window');
const panelH = height*0.88;
const panelW = width*0.8;




export default class ImageUI extends Component {

  constructor(props) {
    super(props);
    this.state = {
       fadeAnim2: new Animated.Value(0),
       // init opacity 0
     };
    
}
componentDidMount () {
  Animated.timing(          // Uses easing functions
       this.state.fadeAnim2,    // The value to drive
       {toValue: 0.88,
       duration:2000}            // Configuration
     ).start();
 
}



  render() {
        
    return (
            <Animated.View style={[styles.capaMenu, { height:panelH/8, width:panelW/8, opacity: this.state.fadeAnim2}]}>
             <TouchableOpacity key={i} onPress={this.props.onClick2}> 
               
              <Image
                    style={{height:panelH/9, width:panelW/9}}
                    source={{uri:this.props.img}}
                    resizeMode="stretch"

              />
              </TouchableOpacity>
                  

               
            </Animated.View>
          )
  }
}

const styles = StyleSheet.create({
  
  capaMenu: {
    backgroundColor:'transparent',
    opacity:0.88,
    elevation:6,
    

  },
 
});