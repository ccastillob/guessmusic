
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { types } from '../../types/types';
import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';
import ChatSectionLeft from '../organisms/ChatSectionLeft';
import ChatSectionRight from '../organisms/ChatSectionRight';
import ChatSelectUser from '../organisms/ChatSelectUser';
import SkeletonChatPage from '../skeletons/SkeletonChatPage';

const ChatPage = () => {

	const dispatch = useDispatch()
	const { chatActivo, usuariosChat } = useSelector(state => state.chat)

	useEffect(() => {

		dispatch({
			type: types.userClearDataProfile
		})

		dispatch({
			type: types.clearActiveChat
		})

	}, [dispatch])

	return (

		(usuariosChat === null) ? (

			<SkeletonChatPage />

		) : (
		<>
			<HeaderMenu active="chat" status={`chatview ${ !chatActivo && "default" }`} />
			<HeaderMenuSecondary status={`chatview ${ !chatActivo && "default" }`} />

			<div className="ed-container main-container container-allSectionsChat">
				<div className="ed-grid s-grid-12 s-gap-0">

					<ChatSectionLeft />

					{
						( chatActivo )
							? <ChatSectionRight />
							: <ChatSelectUser />
					}

				</div>
			</div>
		</>
		)


	)
}

export default ChatPage;
