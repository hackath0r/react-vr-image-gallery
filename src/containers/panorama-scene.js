import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PanoramaScene extends Component {
    render() {
        if (!this.props.selectedImage) {
            return <div>Select an image to view in panorama scene</div>;
        }
        return (
            <Scene>
                <Entity primitive="a-sky" src={this.props.selectedImage.pano} />
                <Entity primitive="a-camera">
                  <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
                </Entity>
            </Scene>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedImage: state.selectedImage
    };
}

export default connect(mapStateToProps)(PanoramaScene);
