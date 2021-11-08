
// Importamos los tipos
import { types } from "../types/types";

// Inicializamos el estado
const initialState = {
	uid: '',
	chatActivo: null,
	usuariosChat: null,
	mensajes: [],
}

// Exportamos y creamos una función donde estableceremos los casos y retornar un estado
export const chatReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.usersChatSubscriptions:
			return {
				...state,
				usuariosChat: [...action.payload]
			}
		case types.usersChatSubscriptionsClear:
			return initialState
		case types.activeChat:
			if( state.chatActivo === action.payload ) return state;

			return {
				...state,
				chatActivo: action.payload,
				mensajes: []
			}
		case types.clearActiveChat:
			return {
				...state,
				chatActivo: null,
				mensajes: []
			}
		case types.newMessage:
			if( state.chatActivo === action.payload.userOf ||
					state.chatActivo === action.payload.userFor
			){
				return {
					...state,
					mensajes: [ ...state.mensajes, action.payload ]
				}
			}else {
				return state;
			}
		case types.loadingMessages:
			return {
				...state,
				mensajes: [...action.payload]
			}
		default:
			return state;
	}

}