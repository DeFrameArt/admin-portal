import { combineReducers } from 'redux';
import AccountReducer from './reducer_accounts';
import AdminReducer from './reducer_accounts';
import FeatureImages from './reducer_accounts';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
form: formReducer,
gallery: AccountReducer,
featureimages: FeatureImages,
admins: AdminReducer
})
export default rootReducer
