
import { types } from '../types/types';

const initialState = {
	categories: null
}

export const categorieReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.loadingCategories:
			return {
				...state,
				categories: [ ...action.payload ],
			}
		case types.clearCategories:
			return initialState;
		default:
			return state;
	}

}