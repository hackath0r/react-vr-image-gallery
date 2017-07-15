import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getImages } from '../actions/get-images';
import { selectImage } from '../actions/select-image';
import { bindActionCreators } from 'redux';

// Container for images
class Gallery extends Component {
    constructor(props) {
        super(props);

        this.props.getImages();
    }

    renderList() {
        return this.props.images.map((image, index) => {
            return (
                <li key={index}>
                    <img onClick={() => this.props.selectImage(image)}
                        src={image.pano}
                        alt={image.name} />
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="image-gallery">
                {this.renderList()}
            </ul>
        )
    }
}

// images state returned from redux store will show up as props
// inside of Gallery container
function mapStateToProps(state) {
    return {
        images: state.images
    };
}


// Returned action creator from this function will show up as props
// on the Gallery container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectImage: selectImage,
                                getImages: getImages}, dispatch);
}

// Connect redux store and actions to Gallery container
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
