
// Importamos los tipos
import { types } from "../types/types";

// Inicializamos el estado vacio en este caso
const initialState = {
	data: null,
	followings: undefined,
	followers: undefined,
}

// Exportamos y creamos una función donde estableceremos los casos y retornar un estado
export const userReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.userData:
			return {
				...state,
				data: action.payload
			}
		case types.userFollowings:
			return {
				...state,
				followings: [...action.payload]
			}
		case types.userFollowers:
			return {
				...state,
				followers: [...action.payload]
			}
		case types.userClearData:
			return initialState
		default:
			return state;
	}

}