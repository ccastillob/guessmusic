
import React from 'react';

import IconSearch from '../icons/IconSearch';
import ItemChatUser from '../molecules/ItemChatUser';

const ChatSectionLeft = ({chatActivo, setChatActivo}) => {

	return (
		<div className={`container-chatSectionLeft ${ chatActivo ? "chatview" : "" }`}>
			<h2 className="title-color s-center s-py-4">Amigos</h2>

			{/* <h3 className="content-color s-center s-mb-4">Aún no tienes amigos</h3>
			<PrimaryButton title="Busca amigos" otherClass="s-to-center" /> */}

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
	)
}

export default ChatSectionLeft;
