
import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";

export const startProfileData = ( username ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `user/username/${ username }` );
		const body = await resp.json();

		if( body.ok ) {

			return dispatch({
				type: types.userDataProfile,
				payload: body.user,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const startProfileFollowings = ( username ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `subscription/username/${ username }` );
		const body = await resp.json();

		if( body.ok ) {

			const arrSubscriptionsOld = body.subscription.arrSubscriptions;
			const arrSubscriptionsNew = arrSubscriptionsOld.map( ({ stateSubscription, userIDFriend }) => {

				return {
					stateSubscription,
					...userIDFriend,
				}

			});

			return dispatch({
				type: types.userFollowingsProfile,
				payload: arrSubscriptionsNew,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const startProfileFollowers = ( username ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `subscriber/username/${ username }` );
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
				type: types.userFollowersProfile,
				payload: arrUserSubscribersNew,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const startProfileAchievements = ( username ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `achievement/username/${ username }` );
		const body = await resp.json();

		if( body.ok ) {

			const arrUserAchievements = body.achievement.arrAchievements;

			return dispatch({
				type: types.userAchievementsProfile,
				payload: arrUserAchievements,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const startProfileCategories = ( username ) => {

	return async( dispatch ) => {
		const resp = await fetchConToken( `categorie/username/${ username }` );
		const body = await resp.json();

		if( body.ok ) {

			const arrUserCategories = body.categorie.arrCategories;

			return dispatch({
				type: types.userCategoriesProfile,
				payload: arrUserCategories,
			});

		}else {
			window.location.href = "/error";
		}

	}

}

export const clearProfileData = () => {

	return async( dispatch ) => {

		dispatch({
			type: types.userClearDataProfile
		});

	}

}


