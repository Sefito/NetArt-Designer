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
import ImageUI from './ImagenesUI/ImageUI.js';

const {height, width} = Dimensions.get('window');
const panelH = height*0.88;
const panelW = width*0.8;
const img = require('../img/logo.png');

const IMAGE_URIS = [
  'https://pbs.twimg.com/profile_images/502398925467566080/l6CsqFEU_400x400.jpeg',
  'https://s-media-cache-ak0.pinimg.com/originals/d2/22/72/d222720cdd96977357e8a76163760292.jpg',
  'http://os.typepad.com/my_weblog/images/thematrix1_small.jpg',
  'http://www.mardomak.org/wp-content/uploads/2017/01/tics1.jpg',
  'http://www.lightecture.com/wp-content/uploads/2015/01/Bruce-Munros-installation-004-620x465.jpg',
  'http://www.culturemobile.net/sites/culturemobile.net/files/images/articles/plateformes/body/bianchini_allover.png',
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTU7O6mFCzMDnQ-IYfRXkSXC56roNhKMBxknM6k5YwetYhkb3P6CA',
  'https://media.giphy.com/media/4flKQuF7iTfNu/giphy.gif',
  'http://68.media.tumblr.com/5baba47b276eb322cf712b5a750860f3/tumblr_nk7fbrlTe71slt6qeo1_500.gif',
  'https://media.giphy.com/media/EqtiBw2DuNSBW/giphy.gif',
  
  'https://media.giphy.com/media/xTka00BvgGg4giKTLi/giphy.gif',
  'http://imagine-ps.com/community/uploads/monthly_2016_09/giphy.gif.6164b2ac328238fa4e6947afbf6c4a4a.thumb.gif.8e119cff7dd3bb660d323c71760234ba.gif',
  'http://encina.pntic.mec.es/jarv0000/pez1.jpg',
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1pD7kBINW2Ga82tro9FG0RHa_ibnIbPk_qfUXKNFbKh1Z8riy',
  'http://4.bp.blogspot.com/-PV0yrKV9Iok/VSAYbLtxq7I/AAAAAAAAABI/5VKZ8aRq_Oc/s1600/bb-ascii-art-screenshot-zebra.png',
  'http://k30.kn3.net/taringa/5/5/2/3/2/5/SamuelCARP/DA9.jpg',
  'http://k39.kn3.net/BE00E5A16.jpg',
  'https://cdn.pixabay.com/photo/2013/03/19/21/12/digital-art-95074_960_720.jpg',
  'http://www.muycurioso.net/sites/default/files/images/naturaleza/2015/Marzo%202015/Excelentes%20ejemplos%20de%20fotografia%20de%20animales/40.png',
  'https://s-media-cache-ak0.pinimg.com/236x/99/63/b9/9963b93e9d564ff20035b43100163d69.jpg',
  'http://artelista.s3.amazonaws.com/obras/thumbs/2/0/1/4388879279863164.jpg',
  'https://i.ytimg.com/vi/UNAh0zvAiiY/maxresdefault.jpg',
  'http://artelista.s3.amazonaws.com/obras/big/6/2/7/1854546655894833.jpg',
  'https://stream.univie.ac.at/media/aconet/net25-netart.jpeg',
  'http://www.creativeapplications.net/wp-content/uploads/2016/11/39_Mask_3_detail-1200x800.jpg',


];

export default class FormularioUI extends Component {

  constructor(props) {
    super(props);
    this.state = {
       fadeAnim2: new Animated.Value(0),
       marginTop2: new Animated.Value(height), // init opacity 0
       seleccion1: null,
       seleccion2:null,
     };
     this._onPress = this._onPress.bind(this);
     this._onPress2 = this._onPress2.bind(this);
}
componentDidMount () {
  Animated.timing(          // Uses easing functions
       this.state.fadeAnim2,    // The value to drive
       {toValue: 0.88,
       duration:2000}            // Configuration
     ).start();
  Animated.timing(          // Uses easing functions
       this.state.marginTop2,    // The value to drive
       {toValue: 0,
       duration:1500}            // Configuration
     ).start();  
}

_onPress(){
  console.log(" presiono");
    Animated.timing(          // Uses easing functions
       this.state.fadeAnim2,    // The value to drive
       {toValue: 0.0,
       duration:1000}            // Configuration
     ).start(()=>{
    
      this.props._onClick();
    });
  }
  _onPress2(imagen){
    this.setState({
      seleccion1:imagen,
    })
  }  

  render() {
    let imagen;
    let seleccion1;
    let seleccion2;

    imagen = IMAGE_URIS.map((imagen, i)=>{
      return (<TouchableOpacity key={i} onPress={this._onPress2.bind(imagen,this)}><ImageUI img={imagen}  /></TouchableOpacity>);
    });
    if(this.state.seleccion1){
      seleccion1 =(<Image
                    style={[styles.button,{height:40, width:panelH*3/10, marginLeft:panelW*0.1}]}
                    source={{uri:this.state.seleccion1}}
                    resizeMode="stretch"

                  />);
    }
    else{
      seleccion1= null;
    }

        
    return (
            <Animated.View style={[styles.capaMenu, {height:panelH, width:panelW, opacity: this.state.fadeAnim2, marginTop:this.state.marginTop2}]}>
              
               
              <Image
                    style={[styles.button,{height:panelH/10, width:panelW/2.5, marginLeft:panelW*0.1}]}
                    source={img}
                    resizeMode="stretch"

              />
              <View style={{flexDirection:'column', justifyContent:'space-around',alignItems:'center', height:panelH*9/10, width:panelW, backgroundColor:'transparent' }}>
                <View style={{ flexDirection:'row', justifyContent:'flex-start',flexWrap:'wrap',height:panelH*5.3/10, width:panelW, backgroundColor:'transparent' }}>
                {imagen}
                </View>
                <View style={{flexDirection:'row', height:2, width:panelW, backgroundColor:'white' }}>
                </View>
                 <View style={{flexDirection:'row',alignItems:'center', height:panelH*3.2/10, width:panelW, backgroundColor:'blue' }}>
                
                  <View style={{height:panelH*3/10, width:panelW*3/10, backgroundColor:'white'}}>
                    {seleccion1}
                  </View>
                  <View style={{height:panelH*3/10, width:panelW*3/10, backgroundColor:'white'}}>
                    {seleccion2}
                  </View>

                </View>
              </View>
              <TouchableOpacity onPress={this._onPress}>
                  <Image
                    style={[styles.button,{height:40, width:150, marginLeft:panelW*0.1}]}
                    source={{uri:'http://im.loadim.com/yZ.png'}}
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