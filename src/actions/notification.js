
import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';

export const loadingNotifications = (id) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `notification/${id}` );
		const body = await resp.json();
		const { notification } = body;

		if( body.ok ) {

			dispatch({
				type: types.loadingNotifications,
				payload: notification.arrNotifications,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const clearNotifications = () => {

	return async( dispatch ) => {

		dispatch({
			type: types.clearNotification
		});

	}

}