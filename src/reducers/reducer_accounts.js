import { FETCH_GALLERY, FETCH_ADMINS, FEATURE_IMAGES } from '../actions/index';
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type) {
      case FETCH_GALLERY:
      //
      // console.log(showMessage())
    
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
