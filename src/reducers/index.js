import { combineReducers } from 'redux';
import AccountReducer from './reducer_accounts';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
form: formReducer,
gallery: AccountReducer
})
export default rootReducer
