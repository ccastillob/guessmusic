
import React, { useEffect, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadingLastMessageAndUsersChat } from '../actions/subscription';
import { scrollToBottomMessages } from '../helpers/scrollToBottom';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

	const dispatch = useDispatch();
	const { socket, online, conectarSocket, desconectarSocket } = useSocket('https://app-guessmusic.herokuapp.com');
	const { logged, uid } = useSelector(state => state.auth);

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

	useEffect(() => {

		socket?.on( 'my-subscriptions', async( ) => {
			await loadingLastMessageAndUsersChat(dispatch);
		});

	}, [ socket, uid, dispatch ]);

	useEffect(() => {

		socket?.on( 'personal-message', async( message ) => {

			dispatch({
				type: types.newMessage,
				payload: message,
			});

			await loadingLastMessageAndUsersChat(dispatch);
			scrollToBottomMessages('messages-chat');

		});

	}, [ socket, dispatch ]);

	useEffect(() => {

		socket?.on( 'load-latest-messages', ( friendsWithLastMessage ) => {

			dispatch({
				type: types.usersChatSubscriptions,
				payload: friendsWithLastMessage,
			});

		});

	}, [ socket, dispatch ]);

	useEffect(() => {

		socket?.on( 'start-notifications', ( notifications ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...notifications.arrNotifications ],
			});

		});

	}, [ socket, dispatch ]);

	useEffect(() => {

		socket?.on( 'confirm-notification', ( user ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ],
			})

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ],
			})

		});

	}, [ socket, dispatch ]);

	useEffect(() => {

		socket?.on( 'confirm-notification-userSend', async( user ) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings,
			})

			await loadingLastMessageAndUsersChat(dispatch);

		});

	}, [ socket, dispatch ]);

	useEffect( () => {

		socket?.on( 'cancel-notification', ( user ) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ],
			});

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ],
			});

		});

	}, [ socket, dispatch ])

	useEffect( () => {

		socket?.on( 'cancel-notification-userSend', async( user ) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings,
			});

			await loadingLastMessageAndUsersChat(dispatch);

		});

	}, [ socket, dispatch ])

	useEffect( () => {

		socket?.on( 'start-following', ( user ) => {

			if( user.followings !== null ) {

				dispatch({
					type: types.userFollowings,
					payload: user.followings,
				});

			}

		})

	}, [ socket, dispatch ])

	useEffect( () => {

		socket?.on('start-following-userSend', (user) => {

			if( user.notifications !== null ) {

				dispatch({
					type: types.loadingNotifications,
					payload: [ ...user.notifications ],
				});

			}

			if( user.followers !== null ) {

				dispatch({
					type: types.userFollowers,
					payload: [ ...user.followers ],
				});

			}

		})

	}, [ socket, dispatch ])

	useEffect( () => {

		socket?.on( 'cancel-request', (user) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings,
			});

		});

	}, [ socket, dispatch ]);

	useEffect( () => {

		socket?.on( 'cancel-request-userSend', (user) => {

				dispatch({
					type: types.loadingNotifications,
					payload: [ ...user.notifications ],
				});

				dispatch({
					type: types.userFollowers,
					payload: [ ...user.followers ],
				});

		});

	}, [ socket, dispatch ]);

	useEffect( () => {

		socket?.on( 'end-following', async(user) => {

			dispatch({
				type: types.userFollowings,
				payload: user.followings,
			});

			await loadingLastMessageAndUsersChat(dispatch);

		});

	}, [ socket, dispatch ]);

	useEffect( () => {

		socket?.on( 'end-following-userSend', (user) => {

			dispatch({
				type: types.loadingNotifications,
				payload: [ ...user.notifications ],
			});

			dispatch({
				type: types.userFollowers,
				payload: [ ...user.followers ],
			});

		});

	}, [ socket, dispatch ]);

	return (
			<SocketContext.Provider value={{ socket, online }}>
					{ children }
			</SocketContext.Provider>
	)

}