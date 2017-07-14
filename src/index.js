import 'aframe';
import axios from 'axios';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery.js'

const GET_IMAGES_API = 'https://demo0813639.mockable.io/getPanos';

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
        <div>
            <Gallery
                onImageSelect={selectedImage => this.setState({selectedImage}) }
                images={this.state.images} />
            <Scene>
                <Entity primitive="a-sky" src={this.state.selectedImage} />
                <Entity primitive="a-camera">
                  <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
                </Entity>
            </Scene>

        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
