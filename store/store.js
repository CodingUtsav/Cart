import {createStore} from 'redux';
import rootReducer from './rootReducer';
import cartReducer from './cartReducer';

const store = createStore(cartReducer);
export default store;
