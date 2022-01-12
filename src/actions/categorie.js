
import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';

export const loadingCategories = (id) => {

	return async( dispatch ) => {
		const resp = await fetchConToken(`categorie/${ id }`);
		const body = await resp.json();
		const { categorie } = body;

		if( body.ok ) {

			dispatch({
				type: types.loadingCategories,
				payload: categorie.arrCategories,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const clearCategories = () => {

	return async( dispatch ) => {

		dispatch({
			type: types.clearCategories
		});

	}

}