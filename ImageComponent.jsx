import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';
export default class ImageComponent extends Component {
  rener() {
    let pic = {url = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
      <Image source={pic} style={{width: 192, height: 100}}/>
    )
  }
}

AppRegistry.registerComponent('AweesomProject', () => ImageComponent)
