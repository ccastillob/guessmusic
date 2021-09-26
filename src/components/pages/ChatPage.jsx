
import React, { useState } from 'react';

import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';
import ChatSectionLeft from '../organisms/ChatSectionLeft';
import ChatSectionRight from '../organisms/ChatSectionRight';
import ChatSelectUser from '../organisms/ChatSelectUser';

const ChatPage = () => {

	const [chatActivo, setChatActivo] = useState(false);
	// console.log(chatActivo);

	// const handleView = () => {
	// 	setChatActivo(true);
	// }

	return (
		<>
			<HeaderMenu active="chat" status={`chatview ${ chatActivo ? "" : "default" }`} />
			<HeaderMenuSecondary status={`chatview${ chatActivo ? "" : " default"}`} setChatActivo={setChatActivo} />
			{/* <HeaderMenu status="chatview"/>
			<HeaderMenuSecondary status="chatview"/> */}

			<div className="ed-container main-container container-allSectionsChat">
				<div className="ed-grid s-grid-12 s-gap-0">

					<ChatSectionLeft chatActivo={ chatActivo } setChatActivo={ setChatActivo } />

					{
						(true)
							? <ChatSectionRight chatActivo={ chatActivo } />
							: <ChatSelectUser />
					}

				</div>
			</div>
		</>
	)
}

export default ChatPage;
