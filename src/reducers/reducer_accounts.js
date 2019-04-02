import { FETCH_GALLERY, FETCH_ADMINS, FEATURE_IMAGES ,MUSEUM_BY_CITY, FETCH_MUSEUMS} from '../actions/index';
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type) {
      case FETCH_GALLERY:
      return _.mapKeys(action.payload, "id")
      case FETCH_MUSEUMS:
      console.log(action.payload)
      console.log(_.mapKeys(action.payload, "id"))
      return _.mapKeys(action.payload, "id")
      case FEATURE_IMAGES:
      return _.mapKeys(action.payload, "id")
        case FETCH_ADMINS:
        return _.mapKeys(action.payload, "id")
case MUSEUM_BY_CITY:
return _.mapKeys(action.payload, "city")
        default:
        return state;
    }
}
