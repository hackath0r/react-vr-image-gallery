import { combineReducers } from 'redux';
import ImagesReducer from './reducer_images';
import SelectedImage from './reducer_selected_image';

const rootReducer = combineReducers({
  images: ImagesReducer,
  selectedImage: SelectedImage 
});

export default rootReducer;
