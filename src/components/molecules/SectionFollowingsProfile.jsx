
import React from 'react';

import ItemEmptyFriendProfile from '../atoms/ItemEmptyFriendProfile';

const SectionFollowingsProfile = () => {
	return (
		<div className="friends-following s-mb-4">
			<div className="title-header__friends">
				<h3 className="content-color text-bold">Siguiendo</h3>
			</div>

			<ItemEmptyFriendProfile text="Sin seguidores" />

			{/* <div className="friends-allItems">

				<ItemAddFriendProfile/>

				<ItemExistFriendProfile/>

				<ItemExistFriendProfile/>


			</div>

			<ItemViewMoreFriendProfile/> */}


		</div>
	)
}

export default SectionFollowingsProfile;
