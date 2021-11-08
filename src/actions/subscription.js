
// Importamos los tipos
import { types } from "../types/types";

// Importamos las funcionalidades para el fetch
import { fetchConToken } from "../helpers/fetch";

// Exportamos y creamos una acción asincrona para cargar los ultimos mensajes para cada usuario amigo
export const loadingLastMessageAndUsersChat = async( dispatch ) => {

	const resp = await fetchConToken('subscription/chat');
	const body = await resp.json();

	const userFriends = body?.friendsChat;

	dispatch({
		type: types.usersChatSubscriptions,
		payload: userFriends
	});

}


