import { FETCH_GALLERY } from '../actions/index';
import _ from 'lodash';
export default function (state={}, action){
    switch(action.type) {
      case FETCH_GALLERY:
      debugger
      return _.mapKeys(action.payload, "id")
        default:
        return state;
    }

}
