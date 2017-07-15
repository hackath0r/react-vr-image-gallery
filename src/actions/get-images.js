import axios from 'axios';

const GET_IMAGES_API = 'https://demo0813639.mockable.io/getPanos';

// Get images from api
export function getImages() {
    const request = axios.get(GET_IMAGES_API);

    return {
        type: 'GET_IMAGES',
        payload: request
    }
 }
