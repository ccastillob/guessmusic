
import React from 'react';

import ItemAddFriendProfile from '../atoms/ItemAddFriendProfile';
import ItemExistFriendProfile from '../atoms/ItemExistFriendProfile';
import ItemViewMoreFriendProfile from '../atoms/ItemViewMoreFriendProfile';

const SectionFollowersProfile = () => {

	return (
		<div className="friends-followers">
			<div className="title-header__friends">
				<h3 className="content-color text-bold">Seguidoresa</h3>
			</div>

			{/* <ItemEmptyFriendProfile text="No tienes seguidores" /> */}

			<div className="friends-allItems">

				<ItemAddFriendProfile />

				<ItemExistFriendProfile />

				<ItemExistFriendProfile />

			</div>

			<ItemViewMoreFriendProfile />

		</div>
	)
}

export default SectionFollowersProfile;
