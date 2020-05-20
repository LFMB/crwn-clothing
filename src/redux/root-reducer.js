import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// user reducer is being managed by firebase so no need to whitelist it
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'] 
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);