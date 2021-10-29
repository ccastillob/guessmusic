
import React from 'react';
import { useSelector } from 'react-redux';

import PrimaryButton from '../atoms/PrimaryButton';
import IconSearch from '../icons/IconSearch';
import ItemChatUser from '../molecules/ItemChatUser';

const ChatSectionLeft = () => {

	const { usuariosChat, chatActivo } = useSelector(state => state.chat);
	const myFriendsChat = usuariosChat?.filter( user => user.stateSubscription === true );

	return (
		( usuariosChat === null && myFriendsChat === undefined ) ? (
			// TODO: AGREGAR UN SKELETON
			<h1>Skeleton derecha chat</h1>
		) : (
			<div className={`container-chatSectionLeft ${ chatActivo && "chatview"  }`}>
				<h2 className="title-color s-center s-py-4">Amigos</h2>

				{
					(myFriendsChat?.length === 0 )
					? (
						<>
							<h3 className="content-color s-center s-mb-4">Aún no tienes amigos</h3>
							<PrimaryButton title="Busca amigos" otherClass="s-to-center" />
						</>
					)
					: (
						<>
							<form type="submit" className="chatSectionLeft_boxSearch">
								<i className="container-icon-searchFriend content-color">
									<IconSearch />
								</i>
								<input type="text" autoComplete="off" placeholder="Busca amigos" className="boxSearch-data text-overflow" />
							</form>

							<div className="chatSectionLeft_contentBoxItemsChat">
								<div className="contentBoxItemsChat-allItems">

									{
										myFriendsChat?.map( friend => (

											<ItemChatUser key={ friend.userFor } friend={ friend } />

											))

									}

								</div>
							</div>

						</>
					)
				}

			</div>
		)
	)
}

export default ChatSectionLeft;
