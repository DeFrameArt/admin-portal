import { FETCH_GALLERY, FETCH_ADMINS, FEATURE_IMAGES ,MUSEUM_BY_CITY, FETCH_MUSEUMS, CREATE_MUSEUM} from '../actions/index';
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type) {
      case FETCH_GALLERY:
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

export function MuseumReducer (state={}, action){
  switch(action.type) {
    case FETCH_MUSEUMS:
      return _.mapKeys(action.payload, "id")
    case CREATE_MUSEUM: {
      const { payload } = action
      const stateToUpdate = {...state}
      if(payload.id){ stateToUpdate[payload.id] = payload };
      return stateToUpdate
    }
    default:
    return state;
  }
}


