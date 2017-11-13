import { combineReducers } from 'redux';
import SearchReducers from './SearchReducers';

const rootReducer = combineReducers({
  searchRes: SearchReducers
});

export default rootReducer;
