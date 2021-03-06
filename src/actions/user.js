
import Swal from "sweetalert2";

import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { uiCloseEditModal } from "./ui";

export const startUserData = ( uid ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `user/${uid}` );
		const body = await resp.json();

		if( body.ok ) {

			dispatch({
				type: types.userData,
				payload: body.user,
			});

		}else {
			Swal.fire('Error', body.msg, 'error');
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
					...userIDFriend,
				}

			});

			return dispatch({
				type: types.userFollowings,
				payload: arrUserSubscriptionsNew,
			});

		}else {
			Swal.fire('Error', body.msg, 'error');
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
					...userID,
				}

			});

			return dispatch({
				type: types.userFollowers,
				payload: arrUserSubscribersNew,
			});

		}else {
			Swal.fire('Error', body.msg, 'error');
		}

	}

}

export const updateUserAvatar = ( id, objectUpdate ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `user/update/${ id }`, objectUpdate, 'PUT' );
		const body = await resp.json();

		if( body.ok ) {

			const { email, updatedAt, ...restObject } = body.userUpdated;

			return dispatch({
				type: types.userData,
				payload: restObject,
			});

		}else {
			Swal.fire('Error', body.msg, 'error');
		}

	}

}

export const updateUserData = ( id, objectUpdate, history ) => {

	return async( dispatch ) => {
		const respUser = await fetchConToken( `user/${id}` );
		const bodyUser = await respUser.json();
		const { user } = bodyUser;
		const resp = await fetchConToken( `user/update/${ id }`, objectUpdate, 'PUT' );
		const body = await resp.json();

		if( body.ok ) {

			const { email, updatedAt, ...restObject } = body.userUpdated;

			dispatch( uiCloseEditModal() );

			dispatch({
				type: types.userData,
				payload: restObject,
			});

			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Datos guardados',
				showConfirmButton: false,
				timer: 1500,
			});

			if( user.username !== restObject.username ) {
				history.push(`/profile/${restObject.username}`);
			}

		}else {
			Swal.fire('Error', body.msg, 'error');
		}

	}

}
