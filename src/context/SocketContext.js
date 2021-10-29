
import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadingLastMessageAndUsersChat } from '../actions/subscription';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

	const dispatch = useDispatch()
	const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
	const { logged, uid } = useSelector(state => state.auth)

	useEffect(() => {

			if( logged ) {
					conectarSocket();
			}

	}, [ logged, conectarSocket ])

	useEffect(() => {

			if( !logged ) {
					desconectarSocket();
			}

	}, [ logged, desconectarSocket ])

	// Escuchar los cambios en los usuarios para el chat
	useEffect(() => {

		socket?.on( 'my-subscriptions', async( ) => {

			// Cargo los ultimos mensajes de amigos en el chat al conectar y desconectar
			await loadingLastMessageAndUsersChat(dispatch);

		})

	}, [ socket, uid, dispatch ]);

	// Escuchar los mensajes personales
	useEffect(() => {

		socket?.on( 'personal-message', async( message ) => {

			dispatch({
				type: types.newMessage,
				payload: message
			})

			// Nos aseguramos que los mensajes ya hayan sido almacenados en la BD y luego buscamos los ultimos mensajes
			await loadingLastMessageAndUsersChat(dispatch);


		})

	}, [ socket, dispatch ]);

	// Escuchar los cambios en la lista de amigos con el ultimo mensaje en cada uno(lado izquierdo)
	useEffect(() => {

		socket?.on( 'load-latest-messages', ( friendsWithLastMessage ) => {

			dispatch({
				type: types.usersChatSubscriptions,
				payload: friendsWithLastMessage
			});

		})

	}, [ socket, dispatch ]);

	// Escuchar los cambios en la lista de notificaciones con todas las notificaciones del usuario activo
	useEffect(() => {

		socket?.on( 'start-notifications', ( notifications ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...notifications.arrNotifications ]
			});

		})

	}, [ socket, dispatch ]);

	// Escuchar la actualización del estado de la notificación para el usuario activo
	useEffect(() => {

		socket?.on( 'confirm-notification', ( user ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ]
			})

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ]
			})

		})

	}, [ socket, dispatch ]);

	// Escuchar la actualización del estado de la notificación para el usuario que envió la notificación
	useEffect(() => {

		socket?.on( 'confirm-notification-userSend', async( user ) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings
			})

			await loadingLastMessageAndUsersChat(dispatch);

		})

	}, [ socket, dispatch ]);

	// Escuchar la eliminación de la notificación(notificación y follower) para el usuario activo
	useEffect( () => {

		socket?.on( 'cancel-notification', ( user ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ]
			})

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ]
			})

		})

	}, [ socket, dispatch ])


	// Escuchar la eliminación de la notificación(following) para el usuario que envió la notificación
	useEffect( () => {

		socket?.on( 'cancel-notification-userSend', async( user ) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings
			})

			await loadingLastMessageAndUsersChat(dispatch);

		})

	}, [ socket, dispatch ])

	// Escuchar cuando se va a seguir a una persona para el usuario activo
	useEffect( () => {

		socket?.on( 'start-following', ( user ) => {

			if( user.followings !== null ) {

				dispatch({
					type: types.userFollowings,
					payload: user.followings
				});

			}

		})

	}, [ socket, dispatch ])

	// Escuchar cuando se va a seguir a una persona para el usuario que recibe la notificación
	useEffect( () => {

		socket?.on('start-following-userSend', (user) => {

			if( user.notifications !== null ) {

				dispatch({
					type: types.loadingNotifications,
					payload: [ ...user.notifications ]
				})

			}

			if( user.followers !== null ) {

				dispatch({
					type: types.userFollowers,
					payload: [ ...user.followers ]
				})

			}

		})

	}, [ socket, dispatch ])

	// Escuchar cuando se cancela la solicitud para el usuario activo
	useEffect( () => {

		socket?.on( 'cancel-request', (user) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings
			});

		});

	}, [ socket, dispatch ]);

	// Escuchar cuando se cancela la solicitud para el usuario que recibió la notificación
	useEffect( () => {

		socket?.on( 'cancel-request-userSend', (user) => {

				dispatch({
					type: types.loadingNotifications,
					payload: [ ...user.notifications ]
				})

				dispatch({
					type: types.userFollowers,
					payload: [ ...user.followers ]
				})

		});

	}, [ socket, dispatch ]);

	// Escuchar cuando se deja de seguir a una persona para el usuario activo
	useEffect( () => {

		socket?.on( 'end-following', async(user) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings
			})

			await loadingLastMessageAndUsersChat(dispatch);

		});

	}, [ socket, dispatch ]);

	// Escuchar cuando se deja de seguir a una persona para el usuario que recibió la notificación
	useEffect( () => {

		socket?.on( 'end-following-userSend', (user) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ]
			})

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ]
			})

		});

	}, [ socket, dispatch ]);

	return (
			<SocketContext.Provider value={{ socket, online }}>
					{ children }
			</SocketContext.Provider>
	)

}