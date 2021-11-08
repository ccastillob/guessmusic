
// Importamos los tipos
import { types } from '../types/types';

// Inicializamos el estado
const initialState = {
	notifications: null
}

// Exportamos y creamos una función donde estableceremos los casos y retornar un estado
export const notificationReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.loadingNotifications:
			return {
				...state,
				notifications: [ ...action.payload ]
			}
		case types.newNotification:
			return {
				...state,
				notifications: [ ...state.notifications, action.payload ]
			}
		case types.clearNotification:
			return initialState
		default:
			return state;
	}

}