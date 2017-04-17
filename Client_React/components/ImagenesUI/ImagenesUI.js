import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, Animated, Easing } from 'react-native';
import Imagen from './Imagen.js';

const {height, width} = Dimensions.get('window');
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
  'http://www.ilimitado.info/images/002_3D_design_images/004_butterfly/butterflyBackground-01.gif',
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

export default class ImagenesUI extends Component {

  constructor(props) {
    super(props);
    this.state = {
       fadeAnim3: new Animated.Value(0), // init opacity 0
     };
}
componentDidMount () {
  Animated.timing(          // Uses easing functions
       this.state.fadeAnim3,    // The value to drive
       {toValue: 1,
       duration:2000}            // Configuration
     ).start();

}
componentWillMount(){

}

  render() {

    let marTop;
    let marleft;
    let rotate;
    let imagenes = IMAGE_URIS.map((imagen, i)=>{
      marTop = Math.floor(Math.random() * (height-200 + 1));
      marleft= Math.floor(Math.random() * (width-200 + 1));
      rotate =Math.random();
      if(marleft<(width/2)){
        rotate= rotate - 1;
        rotate= Math.floor(rotate * (60 - 0 + 1) + 0); 
      }
      else{
        rotate= Math.floor(rotate * (60 - 0 + 1) + 0);
      }


      return(<Imagen uri={imagen} key={i} top={marTop} left={marleft} altura={height} anchura={width} rotate={rotate} />);
    })
        
    return (
            <Animated.View style={[styles.capaImagenes, {height:height, width:width, opacity: this.state.fadeAnim3}]}>
              <Image
                source={{uri:'http://jugandoaprendochiquimula.com/wp-content/uploads/2014/07/fondo-madera.jpg'}}
                style={{width:width,height:height,}} >
                             
                  {imagenes}
             
               </Image>    
              
            </Animated.View>
          )
  }
}
const styles = StyleSheet.create({
  
  capaImagenes: {
    backgroundColor:'black',
  },

});