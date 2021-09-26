
import React, { useState } from 'react';

import IncomingMessage from '../atoms/IncomingMessage';
import OutgoingMessage from '../atoms/OutgoingMessage';
import IconSearch from '../icons/IconSearch';
import IconSend from '../icons/IconSend';
import HeaderMenu from '../molecules/HeaderMenu';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';
import ItemChatUser from '../molecules/ItemChatUser';
import ItemProfileChatUser from '../molecules/ItemProfileChatUser';

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

					<div className={`container-chatSectionLeft ${ chatActivo ? "chatview" : "" }`}>

						<h2 className="title-color s-center s-py-4">Amigos</h2>
						<form type="submit" className="chatSectionLeft_boxSearch">
							<i className="container-icon-searchFriend content-color">
								<IconSearch />
							</i>
							<input type="text" autoComplete="off" placeholder="Busca amigos" className="boxSearch-data text-overflow" />
						</form>

						<div className="chatSectionLeft_contentBoxItemsChat">
							<div className="contentBoxItemsChat-allItems">

								<ItemChatUser status={true} chatActivo={ chatActivo } setChatActivo={ setChatActivo } />

								<div className="container-item_userChat select">
									<div className="item-userChat_avatar">
										<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
										<div className="avatar__statusCircle offline"></div>
									</div>
									<div className="item-userChat__data">
										<div className="data-content_top">
											<h4 className="text-bold text-overflow">Bumblebee</h4>
											<small className="text-bold">17:56</small>
										</div>
										<div className="data-content_bottom">
											<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
											{/* <div className="circle_getMesaage">
												<h6 className="title-color text-bold">+9</h6>
											</div> */}
										</div>
									</div>
								</div>

								<ItemChatUser status={false} chatActivo={ chatActivo } setChatActivo={ setChatActivo } />

							</div>
						</div>
					</div>

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

				</div>
			</div>
		</>
	)
}

export default ChatPage;
