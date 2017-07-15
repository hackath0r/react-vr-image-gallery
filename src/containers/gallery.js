import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectImage } from '../actions/select-image';
import { bindActionCreators } from 'redux';


class Gallery extends Component {
    renderList() {
        return this.props.images.map((image, index) => {
            return (
                <li>
                    <img onClick={() => this.props.selectImage(image)}
                        src={image.pano}
                        alt={image.name}
                        key={index}/>
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


function mapStateToProps(state) {
    return {
        images: state.images
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectImage: selectImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
