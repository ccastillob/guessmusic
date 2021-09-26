
import React from 'react';

import IncomingMessage from '../atoms/IncomingMessage';
import OutgoingMessage from '../atoms/OutgoingMessage';
import IconSend from '../icons/IconSend';
import ItemProfileChatUser from '../molecules/ItemProfileChatUser';

const ChatSectionRight = ({chatActivo}) => {

	return (
		<div className={`container-chatSectionRight ${ chatActivo ? "" : "chatview" }`}>

			<ItemProfileChatUser />

			<div className="chatSectionRight_sectionConversation">
				<div className="sectionConversation-allItems ed-grid s-grid-12 s-gap-4">

					<IncomingMessage />

					<OutgoingMessage />
					<OutgoingMessage />
					<OutgoingMessage />

					<IncomingMessage />
					<IncomingMessage />
					<IncomingMessage />

					<OutgoingMessage />

				</div>
			</div>

			<form type="submit" className="chatSectionRight_footerConversation">
				<input type="text" placeholder="Escribe un mensaje" autoComplete="off" className="footerConversation__input text-overflow" />
				<button className="footerConversation__iconSend">
					<i className="container-icon-sendMessage primary-color">
						<IconSend />
					</i>
				</button>
			</form>

		</div>
	)
}

export default ChatSectionRight;
