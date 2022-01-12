
import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";

export const loadingLastMessageAndUsersChat = async( dispatch ) => {

	const resp = await fetchConToken('subscription/chat');
	const body = await resp.json();
	const userFriends = body?.friendsChat;

	dispatch({
		type: types.usersChatSubscriptions,
		payload: userFriends,
	});

}


