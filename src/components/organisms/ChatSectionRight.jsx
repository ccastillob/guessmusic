
import React from 'react';
import { useSelector } from 'react-redux';

import IncomingMessage from '../atoms/IncomingMessage';
import OutgoingMessage from '../atoms/OutgoingMessage';
import ItemProfileChatUser from '../molecules/ItemProfileChatUser';
import SendMessage from '../molecules/SendMessage';

const ChatSectionRight = () => {

	const { chatActivo, mensajes } = useSelector(state => state.chat);
	const { uid } = useSelector(state => state.auth);

	return (
		<div className={`container-chatSectionRight ${ !chatActivo && "chatview" }`}>

			<ItemProfileChatUser />

			<div id="messages-chat" className="chatSectionRight_sectionConversation">
				<div className="sectionConversation-allItems ed-grid s-grid-12 s-gap-4">

					{
						mensajes.map( msg => (
							( msg.userFor === uid )
							? <IncomingMessage key={msg._id} msg={ msg }/>
							: <OutgoingMessage key={msg._id} msg={ msg }/>
						))
					}

				</div>
			</div>

			<SendMessage />
		</div>
	)
}

export default ChatSectionRight;
