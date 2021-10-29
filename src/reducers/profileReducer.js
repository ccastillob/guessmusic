
// Importamos los tipos
import { types } from "../types/types";

// Inicializamos el estado vacio en este caso
const initialState = {
	data: null,
	followings: undefined,
	followers: undefined,
}

// Exportamos y creamos una función donde estableceremos los casos y retornar un estado
export const profileReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.userDataProfile:
			return {
				...state,
				data: action.payload
			}
		case types.userFollowingsProfile:
			return {
				...state,
				followings: [...action.payload]
			}
		case types.userFollowersProfile:
			return {
				...state,
				followers: [...action.payload]
			}
		case types.userClearDataProfile:
			return initialState
		default:
			return state;
	}

}