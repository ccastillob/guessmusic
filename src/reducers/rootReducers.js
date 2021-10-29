
// Importamos combineReducers propio de redux
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { chatReducer } from './chatReducer';
import { notificationReducer } from './notificationReducer';
import { profileReducer } from './profileReducer';
import { userReducer } from './userReducer';

// Mediante el combineReducers vamos a establecer todos los reducers para nuestra aplicación y lo exportamos
export const rootReducers = combineReducers({
	auth: authReducer,
	user: userReducer,
	chat: chatReducer,
	otherProfile: profileReducer,
	notification: notificationReducer,
})
