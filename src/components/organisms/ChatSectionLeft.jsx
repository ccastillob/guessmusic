
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PrimaryButton from '../atoms/PrimaryButton';
import IconSearch from '../icons/IconSearch';
import ItemChatUser from '../molecules/ItemChatUser';

const ChatSectionLeft = () => {

	const { usuariosChat, chatActivo } = useSelector(state => state.chat);
	const [ search, setSearch ] = useState('');
	const myFriendsInChat = usuariosChat?.filter( user => user.stateSubscription === true );

	const myFriendsChat = () => {

		if( search.length === 0 )
			return myFriendsInChat

		const searchName = search.split('')[0].toUpperCase()
		const restName = search.substr(1)
		const nameOfSearch = `${searchName}${restName}`;

		// Si hay algo en la caja de busqueda
		const filtered = usuariosChat?.filter( user => user.name.includes( nameOfSearch ) )
		return filtered?.filter( user => user.stateSubscription === true );

	}

	const onSearchChange = ({ target }) => {

		setSearch( target.value )

	}

	return (
		( usuariosChat === null && myFriendsInChat === undefined ) ? (
			// TODO: AGREGAR UN SKELETON
			<h1>Skeleton derecha chat</h1>
		) : (
			<div className={`container-chatSectionLeft ${ chatActivo && "chatview"  }`}>
				<h2 className="title-color s-center s-py-4">Amigos</h2>

				{
					(myFriendsInChat?.length === 0 )
					? (
						<>
							<h3 className="content-color s-center s-mb-4">Aún no tienes amigos</h3>
							<PrimaryButton urlTo="/ranking" title="Busca amigos" otherClass="s-to-center" link={ true } />
						</>
					)
					: (
						<>
							<form type="submit" className="chatSectionLeft_boxSearch">
								<i className="container-icon-searchFriend content-color">
									<IconSearch />
								</i>
								<input
									type="text"
									autoComplete="off"
									placeholder="Busca amigos"
									className="boxSearch-data text-overflow"
									value={ search }
									onChange={ onSearchChange }
								/>
							</form>

							<div className="chatSectionLeft_contentBoxItemsChat">
								<div className="contentBoxItemsChat-allItems">

									{
										myFriendsChat()?.map( friend => (

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
