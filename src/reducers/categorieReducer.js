
// Importamos los tipos
import { types } from '../types/types';

// Inicializamos el estado
const initialState = {
	categories: null
}

// Exportamos y creamos una función donde estableceremos los casos y retornar un estado
export const categorieReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.loadingCategories:
			return {
				...state,
				categories: [ ...action.payload ]
			}
		case types.clearCategories:
			return initialState
		default:
			return state;
	}

}