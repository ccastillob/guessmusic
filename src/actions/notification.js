
// Importamos los tipos
import { types } from '../types/types';

// Importamos las funcionalidades para el fetch
import { fetchConToken } from '../helpers/fetch';

// Exportamos y creamos una acción asincrona para cargar las notificaciones del usuario activo
// Esta acción se conectará con otra acción sincrona
export const loadingNotifications = (id) => {

	return async( dispatch ) => {

		const resp = await fetchConToken( `notification/${id}` );
		const body = await resp.json();
		const { notification } = body;

		if( body.ok ) {

			dispatch({
				type: types.loadingNotifications,
				payload: notification.arrNotifications
			})

		}else {
			// TODO: REDIRIGIR A PÁGINA DE ERROR
			window.location.href = "/error"
		}

	}

}
export const clearNotifications = () => {

	return async( dispatch ) => {

		dispatch({
			type: types.clearNotification,
		})
	}
}