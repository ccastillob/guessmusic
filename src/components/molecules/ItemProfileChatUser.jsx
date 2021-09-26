
import React from 'react';
import { useHistory } from 'react-router';

import IconButton from '../atoms/IconButton';
import PrimaryButton from '../atoms/PrimaryButton';
import IconShield from '../icons/IconShield';
import IconUser from '../icons/IconUser';

const ItemProfileChatUser = () => {

	let history = useHistory();

	const handleProfile = () => {
		// console.log("click history");
		history.push("/profile/121");
	}

	return (
		<div className="chatSectionRight_headerConversation">
			<div className="headerConversation__avatar">
				<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
				<div className="avatar__statusCircle offline"></div>
			</div>
			<div className="headerConversation__data">
				<h4 className="text-overflow">Bumblebee XGeneration</h4>
				<div className="data-content__divitionConversation ancestral-divition">
					<i className="container-icon-shieldConversation s-mr-1">
						<IconShield />
					</i>
					<small className="text-bold">Ancestral</small>
				</div>
			</div>
			<PrimaryButton event={ handleProfile } title="Perfil" />
			<IconButton event={ handleProfile } icon={ <IconUser /> } type="profile" />
		</div>
	)
}

export default ItemProfileChatUser;
