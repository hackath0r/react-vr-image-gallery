import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import axios from 'axios';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const GET_IMAGES_API = 'API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        selectedImage : null
    }

    this.getImages();
  }

  // Function for fetching 360 images from API
  getImages() {
      axios.get(GET_IMAGES_API)
      .then( (imageList) => {
            let images = imageList.data;

            this.setState({
                images: images,
                selectedImage: images[0].pano
            });
      });
  }

  render () {
    return (
      <Scene>
        <Entity primitive="a-sky" src={this.state.selectedImage} />
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
