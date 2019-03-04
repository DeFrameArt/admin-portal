import { combineReducers } from 'redux';
import AccountReducer from './reducer_accounts';
import AdminReducer from './reducer_accounts';
import FeatureImages from './reducer_accounts';
import { reducer as formReducer } from 'redux-form';
import museumByCity from './reducer_accounts';
const rootReducer = combineReducers({
form: formReducer,
gallery: AccountReducer,
featureimages: FeatureImages,
admins: AdminReducer,
cities: museumByCity

})
export default rootReducer
