const initialSelectedImage =
    {
        "pano": "http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg",
        "name": "Truro Park"
    };

export default function(state = initialSelectedImage, action) {
    switch(action.type){
        case 'IMAGE_SELECTED':
            return action.payload;
    }

    return state;
}
