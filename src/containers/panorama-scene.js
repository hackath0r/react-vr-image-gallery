import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Panorama 360 image container
class PanoramaScene extends Component {
    render() {
        if (!this.props.selectedImage) {
            return <div>Select an image to view in panorama scene</div>;
        }
        return (
            <Scene>
                <Entity primitive="a-sky" src={this.props.selectedImage.pano} />
                <a-text value={this.props.selectedImage.name} width="4" position="-0.8 1.5 -1.5"
                        rotation="0 20 0"></a-text>
                <Entity primitive="a-camera">
                  <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
                </Entity>
            </Scene>
        );
    }
}


// selected image state from redux store will show up as props
// inside of PanoramaScene container
function mapStateToProps(state) {
    return {
        selectedImage: state.selectedImage
    };
}

// Connect redux store with PanoramaScene container
export default connect(mapStateToProps)(PanoramaScene);
