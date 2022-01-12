
import { types } from '../types/types';

const initialState = {
	notifications: null
}

export const notificationReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.loadingNotifications:
			return {
				...state,
				notifications: [ ...action.payload ],
			}
		case types.newNotification:
			return {
				...state,
				notifications: [ ...state.notifications, action.payload ],
			}
		case types.clearNotification:
			return initialState;
		default:
			return state;
	}

}