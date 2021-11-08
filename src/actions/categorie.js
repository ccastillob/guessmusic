
// Importamos los tipos
import { types } from '../types/types';

// Importamos las funcionalidades para el fetch
import { fetchConToken } from '../helpers/fetch';

// Exportamos y creamos una acción asincrona para cargar las notificaciones del usuario activo
// Esta acción se conectará con otra acción sincrona
export const loadingCategories = (id) => {

	return async( dispatch ) => {

		const resp = await fetchConToken(`categorie/${ id }`);
		const body = await resp.json();
		const { categorie } = body;

		if( body.ok ) {

			dispatch({
				type: types.loadingCategories,
				payload: categorie.arrCategories
			})

		}else {
			// TODO: REDIRIGIR A PÁGINA DE ERROR
			window.location.href = "/error"
		}

	}

}

export const clearCategories = () => {

	return async( dispatch ) => {

		dispatch({
			type: types.clearCategories,
		})
	}
}