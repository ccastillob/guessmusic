
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { getDivition } from '../../helpers/getDivition';
import { userSelectChat } from '../../helpers/userSelectChat';
import IconButton from '../atoms/IconButton';
import PrimaryButton from '../atoms/PrimaryButton';
import IconShield from '../icons/IconShield';
import IconUser from '../icons/IconUser';

const ItemProfileChatUser = () => {

	let history = useHistory();
	const chat = useSelector(state => state.chat);

	const handleProfile = (username) => {
		history.push(`/profile/${ username }`);
	}

	return (
		<div className="chatSectionRight_headerConversation">
			<div className="headerConversation__avatar">
				<img src={userSelectChat(chat)?.imgAvatar} alt={userSelectChat(chat)?.username} />
				<div className={`avatar__statusCircle ${userSelectChat(chat)?.online ? 'online' : 'offline'}`}></div>
			</div>
			<div className="headerConversation__data">
				<h4 className="text-overflow">{userSelectChat(chat)?.name} {userSelectChat(chat)?.lastName}</h4>
				<div className={`data-content__divitionConversation ${ getDivition( userSelectChat(chat)?.score )?.toLowerCase() }-divition`}>
					<i className="container-icon-shieldConversation s-mr-1">
						<IconShield />
					</i>
					<small className="text-bold">{ getDivition( userSelectChat(chat)?.score ) }</small>
				</div>
			</div>
			<PrimaryButton event={ () => handleProfile(userSelectChat(chat)?.username) } title="Perfil" />
			<IconButton event={ () => handleProfile(userSelectChat(chat)?.username) } icon={ <IconUser /> } type="profile" />
		</div>
	)

}

export default ItemProfileChatUser;
