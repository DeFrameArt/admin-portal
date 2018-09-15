import { FETCH_GALLERY, FETCH_ADMINS, FEATURE_IMAGES } from '../actions/index';
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type) {

      case FETCH_GALLERY:
    // use _.sortBy method to sort by featureType

      return _.mapKeys(action.payload, "id")
      case FEATURE_IMAGES:
      return _.mapKeys(action.payload, "id")
        case FETCH_ADMINS:
        return _.mapKeys(action.payload, "id")
        default:
        return state;
    }
}

// function showFeatureImage(){
//
//   return( s => ...state,
//   gallery.featuretype = 'American')
// }

//quick way to create a new array is by creating ... notation which means
//pull out all the value of array
