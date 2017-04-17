
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View} from 'react-native';
import LoginUI from './components/LoginUI.js';
import FormularioUI from './components/FormularioUI.js';
import ImagenesUI from './components/ImagenesUI/ImagenesUI.js';

export default class NetArtDesigner extends Component {

 constructor(props) {
    super(props);
     this.state = {
      view: '0',
      opacidad:0.88,
     };
     this._onClick = this._onClick.bind(this);
     this._onClick2 = this._onClick2.bind(this);
  }

 _onClick(){
  console.log("recibo click");  
  this.setState({
    view: '1',
  })
 }

 _onClick2(){
  console.log("recibo click");  
  this.setState({
    view: '2',
  })
 }

  render() {

      let view;
      if(this.state.view){
      if(this.state.view == '0'){
        view=(  <LoginUI  _onClick={this._onClick} /> );
      }
      else if(this.state.view== '1'){
        view= ( <FormularioUI _onClick={this._onClick2} /> );
      }
      else if(this.state.view== '2'){
        view= ( <ImagenesUI /> );
      }
  }
    
    return (
      
        <Image
          source={{uri:'http://image.fg-a.com/backgrounds/black-planet-surface-1920.jpg'}}
          style={[styles.container,{opacity:1}]}>
          {view}
        </Image>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('NetArtDesigner', () => NetArtDesigner);
