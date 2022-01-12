
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categorieReducer } from './categorieReducer';
import { chatReducer } from './chatReducer';
import { notificationReducer } from './notificationReducer';
import { profileReducer } from './profileReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

export const rootReducers = combineReducers({
	auth: authReducer,
	user: userReducer,
	chat: chatReducer,
	otherProfile: profileReducer,
	notification: notificationReducer,
	categorie: categorieReducer,
	ui: uiReducer,
})
