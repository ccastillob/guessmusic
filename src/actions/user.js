
// Importamos los tipos
import { types } from "../types/types";

// Importamos las funcionalidades para el fetch
import { fetchConToken } from "../helpers/fetch";

// Exportamos y creamos una acción asincrona para cuando el usuario carga sus datos
// Esta acción se conectará con otra acción sincrona
export const startUserData = ( uid ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `user/${uid}` )
		const body = await resp.json();

		if( body.ok ) {

			dispatch({
				type: types.userData,
				payload: body.user
			})

		}else {
			console.log('Error en un startUserData');
		}

	}

}

export const startUserFollowingsByID = ( id ) => {

	return async( dispatch ) => {

		const resp = await fetchConToken( `subscription/${ id }` );
		const body = await resp.json();

		if( body.ok ) {

			const arrUserSubscriptionsOld = body.subscription.arrSubscriptions;

			const arrUserSubscriptionsNew = arrUserSubscriptionsOld.map( ({ stateSubscription, userIDFriend }) => {

				return {
					stateSubscription,
					...userIDFriend
				}

			})

			return dispatch({
				type: types.userFollowings,
				payload: arrUserSubscriptionsNew
			})

		}else {
			console.log('Error en un startUserFollowingsByID');
		}

	}

}

export const startUserFollowersByID = ( id ) => {

	return async( dispatch ) => {

		const resp = await fetchConToken( `subscriber/${ id }` );
		const body = await resp.json();

		if( body.ok ) {

			const arrUserSubscribersOld = body.subscriber.arrSubscribers;

			const arrUserSubscribersNew = arrUserSubscribersOld.map( ({ stateSubscriber, userID }) => {

				return {
					stateSubscriber,
					...userID
				}

			})

			return dispatch({
				type: types.userFollowers,
				payload: arrUserSubscribersNew
			})

		}else {
			console.log('Error en un startUserFollowersByID');
		}

	}

}

export const updateUserData = ( id, objectUpdate ) => {

	return async( dispatch ) => {

		const resp = await fetchConToken( `user/update/${ id }`, objectUpdate, 'PUT' );
		const body = await resp.json();

		if( body.ok ) {

			const { email, updatedAt, ...restObject } = body.userUpdated;

			return dispatch({
				type: types.userData,
				payload: restObject
			})

		}else {
			console.log('Error en un updateUserData');
		}

	}

}
