import React, { Component } from 'react';
import Gallery from '../containers/gallery';
import PanoramaScene from '../containers/panorama-scene';

export default class App extends Component {
  render() {
    return (
        <div>
            <Gallery />
            <PanoramaScene />
        </div>
    );
  }
}
